import express, {NextFunction, Request, Response} from "express";
import {productsRoute} from "./routes/products-router";
import {addressesRoute} from "./routes/adderess-router";

const app = express()
const PORT = 5000


//middleware
let counterReq = 0
const requestCounterMiddleware = (req: Request, res: Response,next:NextFunction)=>{
    counterReq++
    next()
}


//

app.use(requestCounterMiddleware);
app.use(express.json());
app.use('/products',productsRoute)
app.use('/addresses',addressesRoute)
app.get('/', (req: Request, res: Response) => {
    // res.send('This is back on Express'+' '+counterReq)
    res.send('This is back on Express')
})



app.listen(PORT, () => {
    console.log(`Example app listener on port ${PORT}`)
})