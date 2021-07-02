import axios from 'axios'

class ProductsService {
    constructor() {
        this.app = axios.create({
            baseURL: 'https://makeup-api.herokuapp.com/api/v1'
        })
    }
    getAllProducts = () => this.app.get('/products.json')
    getOneProduct = productId => this.app.get(`/products/${productId}.json`)
    getOneQuery = (query, type) => this.app.get(`/products.json?${type}=${query}`)
    getTwoQueries = (firstQuery, firstType, secondQuery, secondType) => this.app.get(`/products.json?${firstType}=${firstQuery}&${secondType}=${secondQuery}`)
}

export default ProductsService