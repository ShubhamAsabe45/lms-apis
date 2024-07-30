var express = require('express');
var router = express.Router();


const auditModel = require('./../models/auditlogs');

// Get the audit details
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});


// Add audit details
router.post('/', function (req, res, next) {
    res.send('respond with a resource');
});

// Update audit details
router.put('/', function (req, res, next) {
    res.send('respond with a resource');
});

// Delete audit details
router.delete('/', function (req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;