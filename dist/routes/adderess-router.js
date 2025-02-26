"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressesRoute = void 0;
const express_1 = require("express");
const address_repository_1 = require("../repositories/address-repository");
exports.addressesRoute = (0, express_1.Router)({});
exports.addressesRoute.get('/', (req, res) => {
    res.send(address_repository_1.addressRepository.showAddresses());
});
exports.addressesRoute.get('/:id', (req, res) => {
    const response = address_repository_1.addressRepository.getAddressById(+req.params.id);
    response ? res.send(response) : res.send(404);
});
