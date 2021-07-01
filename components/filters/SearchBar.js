import styles from './SearchBar.module.css'
import React, { useState } from "react";
import { Button, FormControl } from 'react-bootstrap'

const SearchBar = ({filterProductsBar}) => {

    const [query, setQuery] = useState()

    const setKeyword = e => {
        setQuery(e.target.value)
        sendQuery(query)
    }

    const sendQuery = keyword => {
        filterProductsBar(keyword)
    }

    return (
        <div className={styles.searchBar}>
            <FormControl type="text" value={query} onChange={e => filterProductsBar(e.target.value)} placeholder="Search" className="mr-sm-2" />
        </div>
    )
}

export default SearchBar