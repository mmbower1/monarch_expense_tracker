const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;
// routes
const transactions = require('./routes/transactions');

// config
dotenv.config({ path: './config/config.env' })

// mongo
connectDB();

// morgan
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
// deployment
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) =>  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

app.use(express.json());

app.use('/api/v1/transactions', transactions);

app.listen(
    PORT,
    console.log(`>>> monarch_expense_tracker Server is running in ${process.env.NODE_ENV} on port ${PORT}`.blue.bold),
    console.log("================================================================")
)