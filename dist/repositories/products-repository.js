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
exports.productsRepository = void 0;
const products = [{ id: 1, title: 'tomato', }, { id: 2, title: 'orange' }];
exports.productsRepository = {
    showProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            return products;
        });
    },
    findProductByID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return products.filter(p => p.id === id);
        });
    },
    findProducts(title) {
        return __awaiter(this, void 0, void 0, function* () {
            if (title) {
                return products.filter(p => p.title.indexOf(title) > -1);
            }
            else {
                return products;
            }
        });
    },
    createProduct(title) {
        return __awaiter(this, void 0, void 0, function* () {
            const newProduct = { id: Math.floor(Math.random() * 1000), title };
            products.push(newProduct);
            return newProduct;
        });
    },
    updateProduct(id, title) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = products.find(a => a.id === id);
            if (product) {
                product.title = title;
                return true;
            }
            else {
                return false;
            }
        });
    },
    deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < products.length; i++) {
                if (products.find(p => p.id === id)) {
                    const index = products.findIndex(p => p.id === id);
                    products.splice(index, 1);
                    return true;
                }
            }
            return false;
        });
    },
};
