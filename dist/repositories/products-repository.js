"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRepository = void 0;
const products = [{ id: 1, title: 'tomato', }, { id: 2, title: 'orange' }];
exports.productsRepository = {
    showProducts() {
        return products;
    },
    findProductByID(id) {
        return products.filter(p => p.id === id);
    },
    findProducts(title) {
        if (title) {
            return products.filter(p => p.title.indexOf(title) > -1);
        }
        else {
            return products;
        }
    },
    createProduct(title) {
        const newProduct = { id: Math.floor(Math.random() * 1000), title };
        products.push(newProduct);
        return newProduct;
    },
    updateProduct(id, title) {
        const product = products.find(a => a.id === id);
        if (product) {
            product.title = title;
            return true;
        }
        else {
            return false;
        }
    },
    deleteProduct(id) {
        for (let i = 0; i < products.length; i++) {
            if (products.find(p => p.id === id)) {
                const index = products.findIndex(p => p.id === id);
                products.splice(index, 1);
                return true;
            }
        }
        return false;
    },
};
