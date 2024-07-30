var express = require('express');
var router = express.Router();

const paymentModel = require('./../models/payments');

// Get the payment details
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

// Add payment details
router.post('/', function (req, res, next) {
    res.send('respond with a resource');
});

// Update payment details
router.put('/', function (req, res, next) {
    res.send('respond with a resource');
});

// Delete payment details
router.delete('/', function (req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;