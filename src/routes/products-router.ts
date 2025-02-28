import {Request, Response, Router} from "express";
import {inputValidationMiddleware, titleValidation} from "../middleware/middleware";
import {productsService} from "../domain/products-service";


export const productsRoute = Router({})


productsRoute.get('/', async (req: Request, res: Response) => {
    const foundProduct = await productsService.findProducts(req.query.title?.toString())
    res.send(foundProduct)
})
// @ts-ignore
productsRoute.post('/', titleValidation, inputValidationMiddleware, async (req: Request, res: Response) => {
    const newProduct = await productsService.createProduct(req.body.title)
    res.status(201).send(newProduct)
})
productsRoute.put('/:id', async (req: Request, res: Response) => {
    const updateProduct = await productsService.updateProduct(+req.params.id, req.body.title)
    if (updateProduct) {
        res.send(productsService.findProductByID(+req.params.id))
    } else {
        res.send(404)
    }
})
productsRoute.delete('/:id', async (req: Request, res: Response) => {
    const result = await productsService.deleteProduct(+req.params.id)
    if (result) {
        res.send(204)
    } else {
        res.send(404)
    }
})
productsRoute.get('/:id', async (req: Request, res: Response) => {
    const response = await productsService.findProductByID(+req.params.id)
    res.send(response)
})
productsRoute.get('/', async (req: Request, res: Response) => {
    const response = await productsService.showProducts()
    res.send(response)
})

