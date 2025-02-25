import express, {Request, Response} from "express";

const app = express()
const PORT = 3000

app.get('/', (req: Request, res: Response) => {
    let Hi = 'Hello Incubator!';
    res.send(Hi)
})

app.listen(PORT, () => {
    console.log(`Example app listener on port ${PORT}`)
})