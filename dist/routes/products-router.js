"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRoute = void 0;
const express_1 = require("express");
const products_db_repository_1 = require("../repositories/products-db-repository");
const middleware_1 = require("../middleware/middleware");
exports.productsRoute = (0, express_1.Router)({});
exports.productsRoute.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const foundProduct = yield products_db_repository_1.productsRepository.findProducts((_a = req.query.title) === null || _a === void 0 ? void 0 : _a.toString());
    res.send(foundProduct);
}));
// @ts-ignore
exports.productsRoute.post('/', middleware_1.titleValidation, middleware_1.inputValidationMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newProduct = yield products_db_repository_1.productsRepository.createProduct(req.body.title);
    res.status(201).send(newProduct);
}));
exports.productsRoute.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updateProduct = yield products_db_repository_1.productsRepository.updateProduct(+req.params.id, req.body.title);
    if (updateProduct) {
        res.send(products_db_repository_1.productsRepository.findProductByID(+req.params.id));
    }
    else {
        res.send(404);
    }
}));
exports.productsRoute.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_db_repository_1.productsRepository.deleteProduct(+req.params.id);
    if (result) {
        res.send(204);
    }
    else {
        res.send(404);
    }
}));
exports.productsRoute.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield products_db_repository_1.productsRepository.findProductByID(+req.params.id);
    res.send(response);
}));
exports.productsRoute.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield products_db_repository_1.productsRepository.showProducts();
    res.send(response);
}));
