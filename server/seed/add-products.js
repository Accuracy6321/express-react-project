require('dotenv').config();
const db = require('../models'); // Import your models

// Define seed data for products
const products = [
  { name: 'Cozy Wool Blanket', price: 59.99, description: 'A warm and soft wool blanket perfect for chilly evenings.' },
  { name: 'Organic Cotton Blanket', price: 49.99, description: 'Made from 100% organic cotton, this blanket is eco-friendly and gentle on the skin.' },
  { name: 'Fleece Blanket', price: 39.99, description: 'A lightweight and durable fleece blanket that provides excellent warmth.' },
  { name: 'Weighted Blanket', price: 89.99, description: 'Designed to reduce stress and improve sleep quality with its gentle pressure.' },
  { name: 'Knitted Throw Blanket', price: 29.99, description: 'A stylish knitted throw blanket that adds a cozy touch to any room.' },
  { name: 'Heated Blanket', price: 99.99, description: 'Stay warm and comfortable with this electric heated blanket, featuring multiple heat settings.' },
  { name: 'Sherpa Blanket', price: 69.99, description: 'A plush Sherpa blanket that offers ultimate softness and warmth.' },
  { name: 'Bamboo Blanket', price: 54.99, description: 'This breathable bamboo blanket is perfect for all seasons and helps regulate body temperature.' },
  { name: 'Microfiber Blanket', price: 34.99, description: 'A super soft microfiber blanket that is easy to care for and highly durable.' },
  { name: 'Down Blanket', price: 79.99, description: 'A luxurious down blanket that provides exceptional warmth and comfort.' },
  // Add more blankets if needed
];

const seedDatabase = async () => {
  try {
    // Connect to the database
    await db.sequelize.authenticate();
    console.log('Database connected!');

    // Sync the database (this will create the tables if they don't exist)
    await db.sequelize.sync({ force: true });

    // Insert seed data into the Product table
    await db.Product.bulkCreate(products);
    console.log('Products table seeded!');

    // Close the database connection
    await db.sequelize.close();
  } catch (error) {
    console.error('Unable to seed the database:', error);
  }
};

seedDatabase();
