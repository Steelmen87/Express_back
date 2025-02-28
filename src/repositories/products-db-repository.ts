import {collectionFromShop, ProductsType} from "./db";

export const productsRepository = {
    async showProducts(): Promise<ProductsType[]> {
        return collectionFromShop.find({}).toArray()
    },
    async findProductByID(id: number): Promise<ProductsType | null> {
        const product: ProductsType | null = await collectionFromShop.findOne({id})
        if (product) {
            return product
        } else {
            return null
        }
    },
    async findProducts(title: string | null | undefined): Promise<ProductsType[]> {
        const filter: any = {}
        if (title) {
            filter.title = {$regex: title}
        }
        return collectionFromShop.find(filter).toArray()

    },
    async createProduct(newProduct: ProductsType): Promise<ProductsType> {
        await collectionFromShop.insertOne(newProduct)
        return newProduct
    },
    async updateProduct(id: number, title: string): Promise<boolean> {
        const result = await collectionFromShop.updateOne({id}, {$set: {title}})
        return result.matchedCount === 1
    },
    async deleteProduct(id: number): Promise<boolean> {
        const result = await collectionFromShop.deleteOne({id})
        return result.deletedCount === 1
    },

}