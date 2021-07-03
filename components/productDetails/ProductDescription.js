import React, { useState } from "react"
import styles from './ProductDescription.module.css'

const ProductDescription = ({product}) => {

    const [color, setColor] = useState('Please select a color')

    return (
        <>
            <h1 dangerouslySetInnerHTML={{__html: product.name}} className={styles.productH1}></h1>
            <p dangerouslySetInnerHTML={{__html: product.description}} className={styles.productDescription}></p>
            <p><b>{product.price_sign?product.price_sign:'$'} {Number(product.price).toFixed(2)}</b></p>
            <p>Selected color: {color}</p>
            {product.product_colors.map(elm => 
                        <button key={elm.colour_name} className={styles.colorPicker} style={{backgroundColor: elm.hex_value}} onClick={() => setColor(elm.colour_name)}></button>

            )}
            <hr></hr>
            <p><i>Tags: {product.tag_list.join(', ')}</i></p>
        </>
    )
}

export default ProductDescription