import styles from './ProductDetails.module.css'
import React, { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import ProductsService from '../../pages/api/products.service'
import { Container, Row, Col, Spinner, Carousel, Form } from 'react-bootstrap'

const productService = new ProductsService()

const ProductDetails = () => {

    const router = useRouter()
    const [product, setProduct] = useState()
    const [color, setColor] = useState('Please select a color')

    useEffect(() => {
        updateProduct()
    }, [] )

    const updateProduct = () => {
        if (!router.query.productId) {<Spinner animation="grow" className='spinner'/> } else {
            const productId = router.query.productId
            productService
                .getOneProduct(productId)
                .then(response => setProduct(response.data))
                .catch(err => console.log(err))
        }
        
    }

    return (
        !product? <Spinner animation="grow" className='spinner'/> : 
        <Container>
            <Row>
                <Col md={6}>
                    <Carousel fade>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={product.api_featured_image}
                            alt={product.name}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={product.image_link}
                            alt={product.name}
                            />
                        </Carousel.Item>
                        </Carousel>
                </Col>
                <Col md={6}>
                    <h1 className={styles.productH1}>{product.name}</h1>
                    <p className={styles.productDescription}>{product.description}</p>
                    <p><b>{product.price_sign?product.price_sign:'$'} {Number(product.price).toFixed(2)}</b></p>
                    <p>Selected color: {color}</p>
                    {product.product_colors.map(elm => 
                                <button className={styles.colorPicker} style={{backgroundColor: elm.hex_value}} onClick={() => setColor(elm.colour_name)}></button>

                    )}
                    <hr></hr>
                    <p><i>Tags: {product.tag_list.join(', ')}</i></p>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetails