import axios from 'axios'

class ProductsService {
    constructor() {
        this.app = axios.create({
            baseURL: 'http://makeup-api.herokuapp.com/api/v1'
        })
    }
    getAllProducts = () => this.app.get('/products.json')
    getOneProduct = productId => this.app.get(`products/${productId}.json`)
}

export default ProductsService