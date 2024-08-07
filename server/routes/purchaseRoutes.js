const express = require('express');
const router = express.Router();
const purchaseController = require('../controllers/purchaseController');

router.post('/purchase', purchaseController.createPurchase);
router.post('/confirm-purchase', purchaseController.confirmPurchase);

module.exports = router;
