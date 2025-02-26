"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressesRoute = void 0;
const express_1 = require("express");
const addresses = [{ id: 1, value: 'Nezalegnai', }, { id: 2, title: 'Mostovai' }];
exports.addressesRoute = (0, express_1.Router)({});
exports.addressesRoute.get('/', (req, res) => {
    res.send(addresses);
});
exports.addressesRoute.get('/:id', (req, res) => {
    const address = addresses.find(a => a.id === +req.params.id);
    if (address) {
        res.send(address);
    }
    else {
        res.send(404);
    }
});
