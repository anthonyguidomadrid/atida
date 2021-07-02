import styles from './ProductsListing.module.css'
import React, { useState, useEffect } from "react";
import ProductsService from '../../pages/api/products.service'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import SearchBarIndex from './searchBar/SearchBarIndex'
import ProductListIndex from './productList/ProductListIndex'

const productService = new ProductsService()

const ProductsListingIndex = () => {

    const [products, setProducts] = useState()
    const [productsCopy, setProductsCopy] = useState()

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

    return (
        !products? <Spinner animation="grow" className='spinner'/> :
        <Container>
            <Row>
                <Col md={3} className={styles.sideBar}>
                    <SearchBarIndex products={products} productsCopy={productsCopy} setProducts={setProducts}/>
                </Col>
                <Col md={9}>
                    <ProductListIndex products={products}/>   
                </Col>
            </Row>
        </Container>
    );
}

export default ProductsListingIndex