import styles from './ProductsList.module.css'
import React, { useState, useEffect } from "react";
import ProductsService from '../../pages/api/products.service'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import ProductCard from './ProductCard'
import ReactPaginate from 'react-paginate'

const productService = new ProductsService()

const ProductsList = () => {

    const [products, setProducts] = useState()
    const [pageNumber, setPageNumber] = useState(0)

    const productsPerPage = 12
    const pagesVisited = pageNumber * productsPerPage

    const displayProducts = products && products.slice(pagesVisited, pagesVisited + productsPerPage).map(product => <ProductCard  key={product .id} {...product}/>)
    const pageCount = products && Math.ceil(products.length /productsPerPage)

     useEffect(() => {
        updateProducts()
    }, [] )

    const updateProducts = () => {
        productService
            .getAllProducts()
            .then(response => setProducts(response.data))
            .catch(err => console.log(err))
    }

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }

    return (
        <Container>
            <Row>
                <Col md={3}>
                    <p>Filters</p>
                </Col>
                <Col md={9}>   
                    <h1>All our products</h1>
                    <p>On this page you will find all our products.</p>
                    <Row>
                    {!products? <Spinner animation="grow" className='spinner'/> : displayProducts}
                    {products && <ReactPaginate
                        previousLabel={'Previous'}
                        nextLabel={'Next'}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={styles.paginationBttns}
                        previousLinkClassName={styles.previousBttn}
                        nextLinkClassName={styles.nextBttn}
                        disabledClassName={styles.paginationDisabled}
                        activeClassName={styles.paginationActive}
                    />}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default ProductsList