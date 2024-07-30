const express = require('express')
const app = express()

const db = require('./db');
require('dotenv').config();

// set the response to json format
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// port defined
const port = process.env.PORT || 3000;


// Router files
const userRoutes = require('./routes/userRoutes');
const settingRoutes = require('./routes/settingsRoutes');
const paymentRoutes = require('./routes/paymentsRoutes');
const loanRoutes = require('./routes/loansRoutes');
const invoiceRoutes = require('./routes/invoicesRoutes');
const customersRoutes = require('./routes/customersRoutes');
const auditsRoutes = require('./routes/auditlogsRoutes');


app.use('/users',userRoutes);
app.use('/settings',settingRoutes);
app.use('/payments',paymentRoutes);
app.use('/loans',loanRoutes);
app.use('/invoices',invoiceRoutes);
app.use('/customers',customersRoutes);
app.use('/audit',auditsRoutes);


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})