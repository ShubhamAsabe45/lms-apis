var express = require('express');
var router = express.Router();

const loanModel = require('./../models/loans');

// Get the loan details
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

// Add loan details
router.post('/', function (req, res, next) {
    res.send('respond with a resource');
});

// Update loan details
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

// Delete loan details
router.delete('/', function (req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;