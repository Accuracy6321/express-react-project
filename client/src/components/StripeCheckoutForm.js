import React, {useImperativeHandle, forwardRef, useState, useContext} from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { TextField, styled, FormLabel } from '@mui/material';
import axios from 'axios';
import { CartContext } from '../context/CartContext';

const Form = styled('form')`
  padding: 16px;
`;

const CheckoutInput = styled(TextField)`
  margin: 0;
`;

const cardElementStyles = {
  style: {
    base: {
      fontSize: '16px',
      color: '#99592A',
      '::placeholder': {
        color: '#E6B17E',
      },
    },
    invalid: {
      color: '#dc004e',
    },
    complete: {
      color: '#E6B17E',
    },
  },
};

const StripeCheckoutForm = forwardRef((props, ref) => {
  const stripe = useStripe();
  const { clearCart } = useContext(CartContext);
  const elements = useElements();
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  useImperativeHandle(ref, () => ({
    handleSubmit: async () => {
      const cardElement = elements.getElement(CardElement);
      props.setError(false);

      try {
        if (email.length < 1 || address.length < 1) {
          throw new Error('Must have email and address');
        }

        props.setLoading(true);

        const { data } = await axios.post(process.env.REACT_APP_API_URL + '/api/purchase', {
          email,
          address,
          products: props.cart.map(product => ({
            productId: product.id,
            quantity: 1 // Assuming quantity 1 for each product; modify if you have quantity in your cart
          })),
          paymentMethodId: (await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
          })).paymentMethod.id,
        });

        const { data: paymentIntent } = await axios.post(process.env.REACT_APP_API_URL + '/api/confirm-purchase', {
          paymentIntentId: data.paymentIntentId,
        });

        if (paymentIntent.status === 'succeeded') {
          // Redirect to success page and clear cart in local storage
          props.setLoading(false);
          clearCart();
          window.location.href = '/success';
        }
      } catch (err) {
        props.setLoading(false);
        props.setError(err?.response?.data?.message ?? err.message);
      }
    }
  }));

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <CheckoutInput
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        fullWidth
        margin="normal"
        required
        sx={{ marginBottom: '16px' }}
      />
      <FormLabel>Card Details</FormLabel>
      <CardElement options={cardElementStyles} />
    </Form>
  );
});

export default StripeCheckoutForm;
