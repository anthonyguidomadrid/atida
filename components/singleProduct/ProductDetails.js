import styles from './ProductDetails.module.css'
import React, { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import ProductsService from '../../pages/api/products.service'
import { Container, Row, Col, Spinner } from 'react-bootstrap'

const productService = new ProductsService()

const ProductDetails = () => {

    const router = useRouter()
    const [product, setProduct] = useState()


    useEffect(() => {
        updateProduct()
    }, [] )

    const updateProduct = () => {
        const productId = router.query.productId
        productService
            .getOneProduct(productId)
            .then(response => setProduct(response.data))
            .catch(err => console.log(err))
        
    }

    return (
        !product? <Spinner animation="grow" className='spinner'/> : 
        <Container>
            <Row>
                <Col md={6}>

                </Col>
                <Col md={6}>
                    <h1 className={styles.productH1}>{product.name}</h1>
                    <p className={styles.productDescription}>{product.description}</p>
                    <p><b>{product.price_sign?product.price_sign:'$'} {Number(product.price).toFixed(2)}</b></p>
                    <p>Available colors:</p>
                    <ul className={styles.colorList}>{product.product_colors.map(elm => <li><span style={{color: elm.hex_value}}>{elm.colour_name}</span></li>)}</ul>
                    <p>Website: <a href={product.website_link} target="_blank">{product.website_link}</a></p>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetails