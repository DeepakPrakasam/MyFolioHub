const express = require('express');
const connectDb = require('./configs/db.config');

const app = express();

connectDb();

// Basic route
app.get('/', (req, res) => {
    res.send('MyFolioHub');
});

module.exports = app;

