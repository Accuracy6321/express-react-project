const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const purchaseRoutes = require('./routes/purchaseRoutes');
const db = require('./models');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', productRoutes);
app.use('/api', purchaseRoutes);

const PORT = process.env.PORT || 5000;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
