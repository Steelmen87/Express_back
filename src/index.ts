import express, {NextFunction, Request, Response} from "express";
import {productsRoute} from "./routes/products-router";
import {runDb} from "./repositories/db";

const app = express()
const PORT = 5000


//middleware
let counterReq = 0
const requestCounterMiddleware = (req: Request, res: Response, next: NextFunction) => {
    counterReq++
    next()
}


//
// Middleware для базовой авторизации
const basicAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).send('Authorization header is missing');
    }

    const base64Credentials = authHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');

    // Замените 'user' и 'password' на ваши учетные данные
    if (username === 'user' && password === '12345') {
        next();
    } else {
        return res.status(401).send('Unauthorized');
    }
};

// Использование middleware
// @ts-ignore
//app.use(basicAuthMiddleware); // Добавляем middleware для авторизации
app.use(requestCounterMiddleware);
app.use(express.json());
app.use('/products', productsRoute)
app.get('/', (req: Request, res: Response) => {
    // res.send('This is back on Express'+' '+counterReq)
    res.send('This is back on Express')
})

const startApp = async () => {
    await runDb()
    app.listen(PORT, () => {
        console.log(`Example app listener on port ${PORT}`)
    })
}
startApp()
