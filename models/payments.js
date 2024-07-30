const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
    loanName:String,
    loanType:String,
    loanAmount:String,
    loanIssueDate:String,
    loanStatus:String
});

const paymentsModel = mongoose.model('Payments',paymentSchema);

module.exports = paymentsModel;