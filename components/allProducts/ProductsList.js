import styles from './ProductsList.module.css'
import React, { useState, useEffect } from "react";
import ProductsService from '../../pages/api/products.service'
import { Container, Row, Col, Spinner, Button } from 'react-bootstrap'
import SearchBar from '../../components/filters/SearchBar'
import SearchType from '../filters/SearchDropdown'
import SearchRange from '../filters/SearchRange'
import ProductCard from './ProductCard'
import ReactPaginate from 'react-paginate'

const productService = new ProductsService()

const ProductsList = () => {

    const [products, setProducts] = useState()
    const [productsCopy, setProductsCopy] = useState()
    const [pageNumber, setPageNumber] = useState(0)

    const productsPerPage = 12
    const pagesVisited = pageNumber * productsPerPage

    const displayProducts = products && products.slice(pagesVisited, pagesVisited + productsPerPage).map(product => <ProductCard  key={product .id} {...product}/>)
    const pageCount = products && Math.ceil(products.length /productsPerPage)

    const typeArr = ['Blush', 'Bronzer', 'Eyebrow', 'Eyeliner', 'Foundation', 'Lip liner', 'Lipstick', 'Mascara', 'Nail polish']

    const brandArr = [ 'almay', 'alva', 'anna sui', 'annabelle', 'benefit', 'boosh', `burt's bees`, 'butter london', `c'est moi`, 'cargo cosmetics', 'china glaze', 'clinique', 'coastal classic creation', 'colourpop', 'covergirl', 'dalish', 'deciem', 'dior', 'dr. hauschka', 'e.l.f.', 'essie', 'fenty', 'glossier', 'green people', 'iman', `l'oreal`, 'lotus cosmetics usa', `maia's mineral galaxy`, 'marcelle', 'marienatie', 'maybelline', 'milani', 'mineral fusion', 'misa', 'mistura', 'moov', 'nudus', 'nyx', 'orly', 'pacifica', 'penny lane organics', 'physicians formula', 'piggy paint', 'pure anada', 'rejuva minerals', 'revlon', `sally b's skin yummies`, 'salon perfect', 'sante', 'sinful colours', 'smashbox', 'stila', 'suncoat', 'w3llpeople', 'wet n wild', 'zorah', 'zorah biocosmetiques'
]

     useEffect(() => {
        updateProducts()
    }, [] )

    const updateProducts = () => {
        productService
            .getAllProducts()
            .then(response => {
                setProducts(response.data)
                setProductsCopy(response.data)
            })
            .catch(err => console.log(err))
    }

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }

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
        !products? <Spinner animation="grow" className='spinner'/> :
        <Container>
            <Row>
                <Col md={3} className={styles.sideBar}>
                    <h4>{products.length} Products found</h4>
                    <p className={styles.searchTitle}>Search by keyword</p>
                    <SearchBar filterProductsBar={query => filterProductsBar(query)}/>
                    <p className={styles.searchTitle}>Search by type</p>
                    <SearchType arr={typeArr} filterProductsDropdown={filterProductsDropdown}/>
                    <p className={styles.searchTitle}>Search by brand</p>
                    <SearchType arr={brandArr} filterProductsDropdown={filterProductsDropdown}/>
                    <p className={styles.searchTitle}>Search by price</p>
                    <SearchRange filterProductsRange={filterProductsRange} name='price' maximum={80} icon='$'/>
                    <p className={styles.searchTitle}>Search by rating</p>
                    <SearchRange filterProductsRange={filterProductsRange} name='rating' maximum={5} icon='★'/>
                    <hr></hr>
                    <Button variant="dark" onClick={reset}>Reset filters</Button>
                </Col>
                <Col md={9}>   
                    <h1>All our products</h1>
                    <p>On this page you will find all our products.</p>
                    <Row>
                    {displayProducts}
                    <ReactPaginate
                        previousLabel={'Previous'}
                        nextLabel={'Next'}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={styles.paginationBttns}
                        previousLinkClassName={styles.previousBttn}
                        nextLinkClassName={styles.nextBttn}
                        disabledClassName={styles.paginationDisabled}
                        activeClassName={styles.paginationActive}
                    />
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default ProductsList