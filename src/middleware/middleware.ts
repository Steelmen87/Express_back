import {body, validationResult} from "express-validator";
import {NextFunction, Request, Response} from "express";

export const titleValidation = body('title').isLength({min: 3, max: 30}).withMessage('Length must be from 3 to 30 ')

export const inputValidationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({resultCode: 1, messages: errors.array()})
    } else {
        next()
    }
}