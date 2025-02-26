import {Request, Response, Router} from "express";
import {addressRepository} from "../repositories/address-repository";


export const addressesRoute = Router({})


addressesRoute.get('/', (req: Request, res: Response) => {
    res.send(addressRepository.showAddresses())
})
addressesRoute.get('/:id', (req: Request, res: Response) => {
    const response = addressRepository.getAddressById(+req.params.id)
    response ? res.send(response) : res.send(404)
})
