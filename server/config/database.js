const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  define: {
    schema: 'cozy_corner' // Replace 'your_schema_name' with the actual schema name
  }
});

module.exports = sequelize;
