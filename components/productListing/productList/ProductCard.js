import styles from './ProductCard.module.css'
import { Card, Col} from 'react-bootstrap'
import Link from 'next/link'

const ProductCard = ({id, api_featured_image, name, rating, price, price_sign}) => {
    const link = '/products/' + id
    const renderPrice = Number(price).toFixed(2)
    const stars = rating => {
        let rate = Math.round(rating)
        let starHTML = ''
        rate = parseInt(rate)
        let increment = 0
        let max = 5
    
        while(increment < rate) {
        starHTML += '★'
        increment++
        }
    
        while(max > rate) {
        starHTML += '☆'
        max--
        }
        return starHTML;
    }

    return (
        <Col md={4}>
            <Card className={styles.productCard}>
            <Card.Img variant="top" src={api_featured_image} />
            <Card.Body>
                <Card.Title dangerouslySetInnerHTML={{__html: name}} ></Card.Title>
                <Card.Text>
                <p>{stars(rating)}</p>
                <Link href={link}>More information &gt;</Link>
                <hr></hr>
                <p><b>{price_sign?price_sign:'$'} {renderPrice}</b> / Unit</p>
                </Card.Text>                    
            </Card.Body>
            </Card>
        </Col>
    )
}

export default ProductCard