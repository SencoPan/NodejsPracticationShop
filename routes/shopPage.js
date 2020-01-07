const router = require('express').Router(),
    Cart = require('../models/cart'),
    Product = require('../models/product');

router.get('/test', (req, res) => {
    res.render('./Partials/header');
});

router.get('/', (req, res) => {
    Product.find((err, data) => {
        if (err) return console.error(err);

        res.render("./FinalPage/shop", {merch: data});
    })
});

router.get('/add-to-cart/:id', (req, res) => {
     const productId = req.params.id;
     const cart = new Cart(req.session.cart ? req.session.cart : {});

     Product.findById(productId, (err, product) => {
        if(err) {
            return res.redirect('/shop');
        }

        cart.add(product, product.id);
        console.log(cart);
        req.session.cart = cart;
        res.redirect('/shop');
     })
});

module.exports = router;