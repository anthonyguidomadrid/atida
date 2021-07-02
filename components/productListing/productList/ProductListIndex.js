import styles from './ProductListIndex.module.css'
import React, { useState } from "react";
import ProductCard from './ProductCard'
import ReactPaginate from 'react-paginate'
import { Row } from 'react-bootstrap'

const ProductListIndex = ({products}) => {

    const [pageNumber, setPageNumber] = useState(0)
    const productsPerPage = 12
    const pagesVisited = pageNumber * productsPerPage
    const displayProducts = products && products.slice(pagesVisited, pagesVisited + productsPerPage).map(product => <ProductCard  key={product .id} {...product}/>)
    const pageCount = products && Math.ceil(products.length /productsPerPage)

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }

    return ( 
        <>
            <h1>All our products</h1>
            <p>On this page you will find all our products.</p>
            <Row>
            {displayProducts}
            <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'Next'}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={styles.paginationBttns}
                previousLinkClassName={styles.previousBttn}
                nextLinkClassName={styles.nextBttn}
                disabledClassName={styles.paginationDisabled}
                activeClassName={styles.paginationActive}
            />
            </Row>
        </>
        )}

export default ProductListIndex