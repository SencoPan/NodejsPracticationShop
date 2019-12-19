const Product = require('../models/product'),
    mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/shopping", { useNewUrlParser: true }, {useUnifiedTopology: true});

let products = [
    new Product({
        imagePath: 'https://www.carillonac1.com/images/detailed/1/laptopcore1.jpg',
        title: 'laptop',
        description: 'Good laptop for education',
        price: 300
        }),
    new Product({
        imagePath: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-mujX40uvXVQ%2FUFE_wPQf8uI%2FAAAAAAAADLI%2FNmoiRhWguGw%2Fs1600%2FToshiba-Qosmio-Laptop.jpg&f=1&nofb=1',
        title: 'laptop',
        description: 'Good laptop for education',
        price: 150
    }),
    new Product({
        imagePath: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pcbilliger.de%2Fmedia%2Fimage%2Fc0%2Ff6%2F62%2Ftoshiba-portege-z30-win10.jpg&f=1&nofb=1',
        title: 'laptop',
        description: 'Good laptop for education',
        price: 500
    }),
    new Product({
        imagePath: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.P_U3IOUvVP-8DWXiGV_6XwHaF7%26pid%3DApi&f=1',
        title: 'laptop',
        description: 'Good laptop for education',
        price: 160
    }),];

let promise = new Promise( () => {
        products.map( merch => {
            merch.save((err) => {
                if( err ) return new Error('Error occurred with the DB Schema: ' + err);
            });
        })
    }
);

promise.then((data) => {
        destroyConnection(data);
}).resolve('Success');


destroyConnection = (val) => {
    console.log(val);
    mongoose.disconnect();
}