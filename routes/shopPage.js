const router = require('express').Router(),
    Product = require('../models/product');

router.get('/test', (req, res) => {
    res.render('./Partials/header');
});

router.get('/', (req, res) => {
    Product.find((err, data) => {
        if (err) return console.error(err);

        res.render("./Partials/shop", {merch: data});
    })
});

module.exports = router;