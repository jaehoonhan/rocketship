// Require node packages
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// Configure environment variable
require('dotenv').config();
// Host on localhost 5000
const app = express();
const port = process.env.PORT || 5000;
// Middleware
app.use(cors());
app.use(express.json());

// Establish MongoDB connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// Add stock and user routes
const stocksRouter = require('./routes/stocks');
const usersRouter = require('./routes/users');
// Use
app.use('/stocks', stocksRouter);
app.use('/users', usersRouter);
// Start server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});