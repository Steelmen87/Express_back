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
const db_1 = require("./db");
exports.productsRepository = {
    showProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            return db_1.collectionFromShop.find({}).toArray();
        });
    },
    findProductByID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield db_1.collectionFromShop.findOne({ id });
            if (product) {
                return product;
            }
            else {
                return null;
            }
        });
    },
    findProducts(title) {
        return __awaiter(this, void 0, void 0, function* () {
            if (title) {
                return db_1.collectionFromShop.find({ title: { $regex: title } }).toArray();
            }
            else {
                return db_1.collectionFromShop.find({}).toArray();
            }
        });
    },
    createProduct(title) {
        return __awaiter(this, void 0, void 0, function* () {
            const newProduct = {
                id: Math.floor(Math.random() * 1000),
                title
            };
            yield db_1.collectionFromShop.insertOne(newProduct);
            return newProduct;
        });
    },
    updateProduct(id, title) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield db_1.collectionFromShop.updateOne({ id }, { $set: { title } });
            return result.matchedCount === 1;
        });
    },
    deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield db_1.collectionFromShop.deleteOne({ id });
            return result.deletedCount === 1;
        });
    },
};
