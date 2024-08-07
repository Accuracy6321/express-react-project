const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const { Purchase, Product } = require('../models');
const sequelize = require('../config/database');

exports.createPurchase = async (req, res) => {
  const { email, address, products, paymentMethodId } = req.body;

  if (!products || products.length === 0) {
    return res.status(400).json({ error: 'No products specified for purchase' });
  }

  const transaction = await sequelize.transaction();

  try {
    // Calculate total amount
    const productDetails = await Product.findAll({
      where: { id: products.map(product => product.productId) }
    });

    let totalAmount = 0;
    products.forEach(p => {
      const productDetail = productDetails.find(pd => pd.id === p.productId);
      if (productDetail) {
        totalAmount += productDetail.price * p.quantity;
      }
    });

    // Create a payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalAmount * 100, // Stripe works with the smallest currency unit
      currency: 'usd',
      payment_method: paymentMethodId,
      receipt_email: email,
    });

    // Create purchase records in the database
    const purchasePromises = products.flatMap(p => {
        return Array(p.quantity).fill(Purchase.create({ productId: p.productId, email, address, stripePaymentIntentId: paymentIntent.id, amount: productDetails.find(product => product.dataValues.id === p.productId).price }, { transaction }))
      }
    );
    await Promise.all(purchasePromises);

    await transaction.commit();

    res.json({ paymentIntentId: paymentIntent.id });
  } catch (error) {
    await transaction.rollback();
    console.error('Error processing purchase:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.confirmPurchase = async (req, res) => {
  const { paymentIntentId } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.confirm(paymentIntentId, { return_url: process.env.REACT_APP_URL + '/success' });
    res.status(200).json(paymentIntent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
