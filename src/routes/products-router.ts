import {Request, Response, Router} from "express";
import {productsRepository} from "../repositories/addresses-repository";


export const productsRoute = Router({})

productsRoute.get('/', (req: Request, res: Response) => {
    const foundProduct = productsRepository.findProducts(req.query.title?.toString())
    res.send(foundProduct)
})
productsRoute.post('/', (req: Request, res: Response) => {
    const newProduct = productsRepository.createProduct(req.body.title)
    res.status(201).send(newProduct)
})
productsRoute.put('/:id', (req: Request, res: Response) => {
    const updateProduct = productsRepository.updateProduct(+req.params.id, req.body.title)
    if(updateProduct){
        res.send(productsRepository.findProductByID(+req.params.id))
    }else{
        res.send(404)
    }
})
productsRoute.delete('/:id', (req: Request, res: Response) => {
    const result = productsRepository.deleteProduct(+req.params.id)
    if (result) {
        res.send(204)
    } else {
        res.send(404)
    }
})
productsRoute.get('/:id', (req: Request, res: Response) => {
    res.send(productsRepository.findProductByID(+req.params.id))
})
productsRoute.get('/', (req: Request, res: Response) => {
    res.send(productsRepository.showProducts())
})

