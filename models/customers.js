const mongoose = require('mongoose');

const customersSchema = mongoose.Schema({
    loanName:String,
    loanType:String,
    loanAmount:String,
    loanIssueDate:String,
    loanStatus:String
});

const customerModel = mongoose.model('Customer', customersSchema);

module.exports = customerModel;