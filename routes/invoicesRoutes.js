var express = require('express');
var router = express.Router();

const invoiceModel = require('./../models/invoices');

// Get the invoice details
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

// Add invoice details
router.post('/', function (req, res, next) {
    res.send('respond with a resource');
});

// update invoice details
router.put('/', function (req, res, next) {
    res.send('respond with a resource');
});

// Delete invoice details
router.delete('/', function (req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;