// Stock API endpoints
const router = require('express').Router();
// Use stock model
let Stock = require('../models/stock.model');

// GET Request
//rooturl/stocks/
router.route('/').get((req, res) => {
    // .find() mongoose command 
    Stock.find()
        // return stocks as JSON
        .then(stocks => res.json(stocks))
        .catch(err => res.status(400).json('Error: ' + err));
});

// POST create stock
//rooturl/stocks/add
router.route('/add').post((req, res) => {

    // store stock attritubes
    const username = req.body.username;
    const ticker = req.body.ticker;
    const date = Date.parse(req.body.date);
    const quantity = Number(req.body.quantity);
    // Create new Stock using stored values
    const newStock = new Stock({
        username,
        ticker,
        date,
        quantity,
    });
    // save stock
    newStock.save()
        .then(() => res.json('Stock added.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;