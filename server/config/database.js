const { Sequelize } = require('sequelize');
require('dotenv').config();

const connectionString = process.env.DATABASE_URL;

const sequelize = new Sequelize(connectionString, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // You might need this if using self-signed certificates
    }
  }
});

module.exports = sequelize;
