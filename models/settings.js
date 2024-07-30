const mongoose = require('mongoose');

const settingSchema = mongoose.Schema({
    loanName:String,
    loanType:String,
    loanAmount:String,
    loanIssueDate:String,
    loanStatus:String
});

const settingsModel = mongoose.model('Settings',settingSchema);

module.exports = settingsModel;