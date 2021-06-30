import styles from './ProductCard.module.css'
import { Card, Col} from 'react-bootstrap'
import Link from 'next/link'

const ProductCard = ({id, api_featured_image, name, rating, price, price_sign}) => {
    const link = '/products/' + id
    const renderPrice = Number(price).toFixed(2)
    const stars = rating => {
        let starDisplay = ''
            const starNumber = Math.round(rating)
                switch(starNumber) {
                    case 0:
                        starDisplay = '☆☆☆☆☆'
                        break;
                    case 1: 
                        starDisplay = '★☆☆☆☆'
                        break;
                    case 2: 
                        starDisplay = '★★☆☆☆'
                        break;
                    case 3: 
                        starDisplay = '★★★☆☆'
                        break;
                    case 4: 
                        starDisplay = '★★★★☆'
                        break;
                    case 5: 
                        starDisplay = '★★★★★'
                        break;
                    default:
                        starDisplay = '☆☆☆☆☆'
                        break;   
                }
            return starDisplay
    }

    return (
        <Col md={4}>
            <Card className={styles.productCard}>
            <Card.Img variant="top" src={api_featured_image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                <p>{stars(rating)}</p>
                <Link href={link}>More information ></Link>
                <hr></hr>
                <p><b>{price_sign?price_sign:'$'} {renderPrice}</b> / Unit</p>
                </Card.Text>                    
            </Card.Body>
            </Card>
        </Col>
    )
}

export default ProductCard