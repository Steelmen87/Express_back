import {MongoClient} from 'mongodb'
import * as process from "process";

const mongoUrl = process.env.mongoUrl || "mongodb://0.0.0.0:27017/"
export type ProductsType = {
    id: number
    title: string
}
const client = new MongoClient(mongoUrl)
const db = client.db("shop")
export const collectionFromShop = db.collection<ProductsType>("products")

export async function runDb() {
    try {
        //Connect client to server
        await client.connect()
        //Establish and verify connect
        await client.db("products").command
        ({ping: 1})
        console.log("Connect successfull to mongo server")
    } catch {
        console.log("Can't to db")
        // If finish or error
        await client.close()
    }
}