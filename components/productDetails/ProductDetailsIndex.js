import React, { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import ProductsService from '../../pages/api/products.service'
import { Container, Row, Col, Spinner} from 'react-bootstrap'
import ProductCarousel from './ProductCarousel'
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

    return (
        !product? <Spinner animation="grow" className='spinner'/> : 
        <Container>
            <Row>
                <Col md={6}>
                    <ProductCarousel img1={product.api_featured_image} img2={product.image_link} alt={product.name}/>
                    {/* <Carousel fade>
                        <Carousel.Item>
                        {console.log(product.api_featured_image)}
                            <Image
                            layout='fill'
                            src= 'https://i.stack.imgur.com/YHoSq.png'
                            // {product.api_featured_image}
                            alt={product.name}
                            onError={addDefaultSrc}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image
                            layout='fill'
                            src= 'https://i.stack.imgur.com/YHoSq.png'
                            // {product.image_link}
                            alt={product.name}
                            onError={addDefaultSrc}
                            />
                        </Carousel.Item>
                        </Carousel> */}
                </Col>
                <Col md={6}>
                    <ProductDescription product={product}/>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetailsIndex