const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define stock portfolio Schema
const stockSchema = new Schema({
    // Attributes and data types
    userid: { 
        type: Schema.ObjectId, 
        ref: 'user',
        required: true 
    },
    ticker: { 
        type: String, 
        required: true
    },
    date: { 
        type: Date,
        required: true
    },
    quantity: {
        type: Number,
        require: true
    },

}, {
    // Create timestamp for each entry
    timestamps: true,
});

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;