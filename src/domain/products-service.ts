import {productsRepository} from "../repositories/products-db-repository";
import {ProductsType} from "../repositories/db";

export const productsService = {
    async showProducts(): Promise<ProductsType[]> {
        return productsRepository.showProducts()
    },
    async findProductByID(id: number): Promise<ProductsType | null> {
        return productsRepository.findProductByID(id)
    },
    async findProducts(title: string | null | undefined): Promise<ProductsType[]> {
        return productsRepository.findProducts(title)

    },
    async createProduct(title: string): Promise<ProductsType> {
        const newProduct = {
            id: Math.floor(Math.random() * 1000),
            title
        }
        await productsRepository.createProduct(newProduct)
        return newProduct
    },
    async updateProduct(id: number, title: string): Promise<boolean> {
        return productsRepository.updateProduct(id,title)
    },
    async deleteProduct(id: number): Promise<boolean> {
        return productsRepository.deleteProduct(id)
    },

}