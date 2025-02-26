"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressRepository = void 0;
const addresses = [{ id: 1, value: 'Nezalegnai', }, { id: 2, title: 'Mostovai' }];
exports.addressRepository = {
    showAddresses() {
        return addresses;
    },
    getAddressById(id) {
        return addresses.find(a => a.id === id);
    }
};
