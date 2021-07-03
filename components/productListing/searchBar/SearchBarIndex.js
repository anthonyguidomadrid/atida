import styles from './SearchBar.module.css'
import ProductsService from '../../../pages/api/products.service'
import SearchBar from './SearchBar'
import SearchDropdown from './SearchDropdown'
import SearchRange from './SearchRange'
import { Spinner, Button } from 'react-bootstrap'

const productService = new ProductsService()

const typeArr = ['Blush', 'Bronzer', 'Eyebrow', 'Eyeliner', 'Foundation', 'Lip liner', 'Lipstick', 'Mascara', 'Nail polish']
const brandArr = [ 'almay', 'alva', 'anna sui', 'annabelle', 'benefit', 'boosh', `burt's bees`, 'butter london', `c'est moi`, 'cargo cosmetics', 'china glaze', 'clinique', 'coastal classic creation', 'colourpop', 'covergirl', 'dalish', 'deciem', 'dior', 'dr. hauschka', 'e.l.f.', 'essie', 'fenty', 'glossier', 'green people', 'iman', `l'oreal`, 'lotus cosmetics usa', `maia's mineral galaxy`, 'marcelle', 'marienatie', 'maybelline', 'milani', 'mineral fusion', 'misa', 'mistura', 'moov', 'nudus', 'nyx', 'orly', 'pacifica', 'penny lane organics', 'physicians formula', 'piggy paint', 'pure anada', 'rejuva minerals', 'revlon', `sally b's skin yummies`, 'salon perfect', 'sante', 'sinful colours', 'smashbox', 'stila', 'suncoat', 'w3llpeople', 'wet n wild', 'zorah', 'zorah biocosmetiques' ]

const SearchBarIndex = ({products, productsCopy, setProducts}) => {

    const filterProductsBar = query => {
        const filteringList = JSON.parse(JSON.stringify(productsCopy))
        const filteredProducts = filteringList.filter(product => product.name.toLowerCase().includes(query.toLowerCase()))
        setProducts(filteredProducts)
    }

    const filterProductsDropdown = query => {

        typeArr.includes(query) && productService
            .getOneQuery(query.toLowerCase(), 'product_type')
            .then(response => setProducts(response.data))
            .catch(err => console.log(err))

        brandArr.includes(query) && productService
            .getOneQuery(query.toLowerCase(), 'brand')
            .then(response => setProducts(response.data))
            .catch(err => console.log(err))
    }

    const filterProductsRange = (min, max, name) => {
        name === 'price' && productService
            .getTwoQueries(min, 'price_greater_than', max, 'price_less_than')
            .then(response => setProducts(response.data))
            .catch(err => console.log(err))

        name === 'rating' && productService
            .getTwoQueries(min, 'rating_greater_than', max, 'rating_less_than')
            .then(response => setProducts(response.data))
            .catch(err => console.log(err))
    }

    const reset = () => {
        setProducts(productsCopy)
    }

    return (
        <>
            {!products? <Spinner animation="grow"/> : <h4>{products.length} Products found</h4>}
            <p className={styles.searchTitle}>Search by keyword</p>
            {!products? <input placeholder="Search" type="text" className="mr-sm-2 form-control" value="" disabled/> :<SearchBar filterProductsBar={query => filterProductsBar(query)}/>}
            <p className={styles.searchTitle}>Search by type</p>
            <SearchDropdown arr={typeArr} filterProductsDropdown={filterProductsDropdown}/>
            <p className={styles.searchTitle}>Search by brand</p>
            <SearchDropdown arr={brandArr} filterProductsDropdown={filterProductsDropdown}/>
            <p className={styles.searchTitle}>Search by price</p>
            <SearchRange filterProductsRange={filterProductsRange} name='price' maximum={80} icon='$'/>
            <p className={styles.searchTitle}>Search by rating</p>
            <SearchRange filterProductsRange={filterProductsRange} name='rating' maximum={5} icon='★'/>
            <hr></hr>
            <Button variant="dark" onClick={reset}>Reset filters</Button>
        </>
    )
}

export default SearchBarIndex