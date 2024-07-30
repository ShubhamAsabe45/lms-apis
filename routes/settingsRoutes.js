var express = require('express');
var router = express.Router();

const settingModel = require('./../models/settings');

// Get setting details
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

// Add setting details
router.post('/', function (req, res, next) {
    res.send('respond with a resource');
});

// Update setting details
router.put('/', function (req, res, next) {
    res.send('respond with a resource');
});

// Delete setting details
router.delete('/', function (req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;