"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputValidationMiddleware = exports.titleValidation = void 0;
const express_validator_1 = require("express-validator");
exports.titleValidation = (0, express_validator_1.body)('title').isLength({ min: 3, max: 30 }).withMessage('Length must be from 3 to 30 ');
const inputValidationMiddleware = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ resultCode: 1, messages: errors.array() });
    }
    else {
        next();
    }
};
exports.inputValidationMiddleware = inputValidationMiddleware;
