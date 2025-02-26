"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRoute = void 0;
const express_1 = require("express");
const products = [{ id: 1, title: 'tomato', }, { id: 2, title: 'orange' }];
exports.productsRoute = (0, express_1.Router)({});
exports.productsRoute.get('/', (req, res) => {
    res.send(products);
});
exports.productsRoute.get('/:id', (req, res) => {
    res.send(products.filter(p => p.id === +req.params.id));
});
exports.productsRoute.get('/', (req, res) => {
    if (req.query.title) {
        let queryParams = req.query.title.toString();
        res.send(products.filter(p => p.title.indexOf(queryParams) > -1));
    }
    else {
        res.send(404);
    }
});
exports.productsRoute.put('/:id', (req, res) => {
    const product = products.find(a => a.id === +req.params.id);
    if (product) {
        product.title = req.body.title;
        res.status(201).send(product);
    }
    else {
        res.send(404);
    }
});
exports.productsRoute.delete('/:id', (req, res) => {
    for (let i = 0; i < products.length; i++) {
        if (products.find(p => p.id === +req.params.id)) {
            products.splice(i, 1);
            res.send(204);
            return;
        }
    }
    res.send(404);
});
exports.productsRoute.post('/', (req, res) => {
    const newProduct = { id: Math.floor(Math.random() * 1000), title: req.body.title };
    products.push(newProduct);
    res.status(201).send(newProduct);
});
exports.productsRoute.get('/:productTitle', (req, res) => {
    let product = products.find(p => p.title === req.params.productTitle);
    if (product) {
        res.send(products);
    }
    else {
        res.send(404);
    }
});
