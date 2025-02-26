import express, {Request, Response} from "express";

const app = express()
const PORT = 5000


const products = [{id: 1, title: 'tomato',}, {id: 2, title: 'orange'}]
const addresses = [{id: 1, value: 'Nezalegnai',}, {id: 2, title: 'Mostovai'}]
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('This is back on Express')
})
app.get('/products', (req: Request, res: Response) => {
    res.send(products)
})
app.get('/products/:id', (req: Request, res: Response) => {
    res.send(products.filter(p=>p.id === +req.params.id))
})
app.get('/products', (req: Request, res: Response) => {
    if (req.query.title) {
        let queryParams = req.query.title.toString()
        res.send(products.filter(p => p.title.indexOf(queryParams) > -1))
    } else {
        res.send(404)
    }

})
app.put('/products/:id', (req: Request, res: Response) => {
    const product = products.find(a => a.id === +req.params.id)
    if (product) {
        product.title = req.body.title
        res.status(201).send(product)
    } else {
        res.send(404)
    }

})
app.delete('/products/:id', (req: Request, res: Response) => {
    for (let i = 0; i < products.length; i++) {
        if (products.find(p => p.id === +req.params.id)) {
            products.splice(i, 1)
            res.send(204)
            return
        }
    }
    res.send(404)

})
app.post('/products', (req: Request, res: Response) => {
    const newProduct = {id: Math.floor(Math.random() * 1000), title: req.body.title}
    products.push(newProduct)
    res.status(201).send(newProduct)
})
app.get('/products/:productTitle', (req: Request, res: Response) => {
    let product = products.find(p => p.title === req.params.productTitle)
    if (product) {
        res.send(products)
    } else {
        res.send(404)
    }
})
app.get('/addresses', (req: Request, res: Response) => {
    res.send(addresses)
})
app.get('/addresses/:id', (req: Request, res: Response) => {
    const address = addresses.find(a => a.id === +req.params.id)
    if (address) {
        res.send(address)
    } else {
        res.send(404)
    }
})


app.listen(PORT, () => {
    console.log(`Example app listener on port ${PORT}`)
})