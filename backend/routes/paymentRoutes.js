const express = require('express');
const { processPayment, sendStripeApiKey } = require('../controllers/paymentController');
const router = express.Router();
const { isAuthenticatedUser} = require("../models/auth");

router.route("/payment/process").post(isAuthenticatedUser, processPayment);
router.route("/stripeapikey").get(isAuthenticatedUser, sendStripeApiKey);
module.exports = router;