const mongoose = require('mongoose');

const loansSchema = mongoose.Schema({
    loanName:String,
    loanType:String,
    loanAmount:String,
    loanIssueDate:String,
    loanStatus:String
})

const loanModel = mongoose.model('Loans',loansSchema);

module.exports = loanModel;