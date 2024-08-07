const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Product = require('./product');
const Purchase = require('./purchase');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Product = Product(sequelize, Sequelize);
db.Purchase = Purchase(sequelize, Sequelize);

module.exports = db;
