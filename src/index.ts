import express, {Request, Response} from "express";
import {productsRoute} from "./routes/products-router";
import {addressesRoute} from "./routes/adderess-router";

const app = express()
const PORT = 5000


app.use(express.json());
app.use('/products',productsRoute)
app.use('/addresses',addressesRoute)
app.get('/', (req: Request, res: Response) => {
    res.send('This is back on Express')
})



app.listen(PORT, () => {
    console.log(`Example app listener on port ${PORT}`)
})