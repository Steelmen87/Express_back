"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRoute = void 0;
const express_1 = require("express");
const addresses_repository_1 = require("../repositories/addresses-repository");
exports.productsRoute = (0, express_1.Router)({});
exports.productsRoute.get('/', (req, res) => {
    var _a;
    const foundProduct = addresses_repository_1.productsRepository.findProducts((_a = req.query.title) === null || _a === void 0 ? void 0 : _a.toString());
    res.send(foundProduct);
});
exports.productsRoute.post('/', (req, res) => {
    const newProduct = addresses_repository_1.productsRepository.createProduct(req.body.title);
    res.status(201).send(newProduct);
});
exports.productsRoute.put('/:id', (req, res) => {
    const updateProduct = addresses_repository_1.productsRepository.updateProduct(+req.params.id, req.body.title);
    if (updateProduct) {
        res.send(addresses_repository_1.productsRepository.findProductByID(+req.params.id));
    }
    else {
        res.send(404);
    }
});
exports.productsRoute.delete('/:id', (req, res) => {
    const result = addresses_repository_1.productsRepository.deleteProduct(+req.params.id);
    if (result) {
        res.send(204);
    }
    else {
        res.send(404);
    }
});
exports.productsRoute.get('/:id', (req, res) => {
    res.send(addresses_repository_1.productsRepository.findProductByID(+req.params.id));
});
exports.productsRoute.get('/', (req, res) => {
    res.send(addresses_repository_1.productsRepository.showProducts());
});
