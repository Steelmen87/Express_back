import {Request, Response, Router} from "express";

const addresses = [{id: 1, value: 'Nezalegnai',}, {id: 2, title: 'Mostovai'}]

export const addressesRoute = Router({})


addressesRoute.get('/', (req: Request, res: Response) => {
    res.send(addresses)
})
addressesRoute.get('/:id', (req: Request, res: Response) => {
    const address = addresses.find(a => a.id === +req.params.id)
    if (address) {
        res.send(address)
    } else {
        res.send(404)
    }
})
