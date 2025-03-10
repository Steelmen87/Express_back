const products = [{id: 1, title: 'tomato',}, {id: 2, title: 'orange'}]
export const productsRepository = {
    async showProducts(){
        return products
    },
    async findProductByID(id: number) {
        return products.filter(p => p.id === id)
    },
    async findProducts(title: string | null | undefined) {
        if (title) {
            return products.filter(p => p.title.indexOf(title) > -1)
        } else {
            return products
        }
    },
    async createProduct(title: string) {
        const newProduct = {id: Math.floor(Math.random() * 1000), title}
        products.push(newProduct)
        return newProduct
    },
    async updateProduct(id: number, title: string) {
        const product = products.find(a => a.id === id)
        if (product) {
            product.title = title
            return true
        } else {
            return false
        }

    },
    async deleteProduct(id: number) {
        for (let i = 0; i < products.length; i++) {
            if (products.find(p => p.id === id)) {
                const index = products.findIndex(p => p.id === id)
                products.splice(index, 1)
                return true
            }
        }
        return false
    },

}