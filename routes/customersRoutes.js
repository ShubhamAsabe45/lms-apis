var express = require('express');
var router = express.Router();

const customerModel = require('./../models/customers');

// Get the customers details
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

// Add customer details
router.post('/', function (req, res, next) {
    res.send('respond with a resource');
});

// Update customer details
router.put('/', function (req, res, next) {
    res.send('respond with a resource');
});

// Delete customer details
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;