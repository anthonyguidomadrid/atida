import React, { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import ProductsService from '../../pages/api/products.service'
import { Container, Row, Col, Spinner, Carousel} from 'react-bootstrap'
import ProductDescription from './ProductDescription'

const productService = new ProductsService()

const ProductDetailsIndex = () => {

    const router = useRouter()
    const [product, setProduct] = useState()

    useEffect(() => {
        router && router.query.productId? updateProduct() : router.push('/')
    }, [] )

    const updateProduct = () => {
            const productId = router.query.productId
            productService
                .getOneProduct(productId)
                .then(response => setProduct(response.data))
                .catch(err => console.log(err))   
    }

    const addDefaultSrc = (ev) => {
        ev.target.src = 'https://media.prdn.nl/retailtrends/files/Logo-Atida.jpg?w=850'
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
                            onError={addDefaultSrc}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={product.image_link}
                            alt={product.name}
                            onError={addDefaultSrc}
                            />
                        </Carousel.Item>
                        </Carousel>
                </Col>
                <Col md={6}>
                    <ProductDescription product={product}/>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetailsIndex