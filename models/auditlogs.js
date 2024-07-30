const mongoose = require('mongoose');

const auditSchema = mongoose.Schema({
    loanName:String,
    loanType:String,
    loanAmount:String,
    loanIssueDate:String,
    loanStatus:String
})

const auditModel = mongoose.model('Audit',auditSchema);

module.exports = auditModel;