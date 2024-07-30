const mongoose = require('mongoose');

const invoiceSchema = mongoose.Schema({
    loanName:String,
    loanType:String,
    loanAmount:String,
    loanIssueDate:String,
    loanStatus:String
});

const invoiceModel = mongoose.model('Invoice', invoiceSchema);

module.exports = invoiceModel;