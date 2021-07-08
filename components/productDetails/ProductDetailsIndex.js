import React, { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import ProductsService from '../../pages/api/products.service'
import { Container, Row, Col, Spinner} from 'react-bootstrap'
import ProductCarousel from './carousel/ProductCarouselIndex'
import ProductDescription from './description/ProductDescriptionIndex'

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

    return (
        !product? <Spinner animation="grow" className='spinner'/> : 
        <Container>
            <Row>
                <Col md={6}>
                    <ProductCarousel img1={product.api_featured_image} img2={product.image_link} alt={product.name}/>
                </Col>
                <Col md={6}>
                    <ProductDescription product={product}/>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetailsIndex