import {Request, Response, Router} from "express";
import {productsRepository} from "../repositories/products-db-repository";
import {inputValidationMiddleware, titleValidation} from "../middleware/middleware";


export const productsRoute = Router({})


productsRoute.get('/', async (req: Request, res: Response) => {
    const foundProduct = await productsRepository.findProducts(req.query.title?.toString())
    res.send(foundProduct)
})
// @ts-ignore
productsRoute.post('/', titleValidation, inputValidationMiddleware, async (req: Request, res: Response) => {
    const newProduct = await productsRepository.createProduct(req.body.title)
    res.status(201).send(newProduct)
})
productsRoute.put('/:id', async (req: Request, res: Response) => {
    const updateProduct = await productsRepository.updateProduct(+req.params.id, req.body.title)
    if (updateProduct) {
        res.send(productsRepository.findProductByID(+req.params.id))
    } else {
        res.send(404)
    }
})
productsRoute.delete('/:id', async (req: Request, res: Response) => {
    const result = await productsRepository.deleteProduct(+req.params.id)
    if (result) {
        res.send(204)
    } else {
        res.send(404)
    }
})
productsRoute.get('/:id', async (req: Request, res: Response) => {
    const response = await productsRepository.findProductByID(+req.params.id)
    res.send(response)
})
productsRoute.get('/', async (req: Request, res: Response) => {
    const response = await productsRepository.showProducts()
    res.send(response)
})

