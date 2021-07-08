import styles from './SearchBar.module.css'
import { FormControl } from 'react-bootstrap'

const SearchBar = ({filterProductsBar}) => {

    return (
        <div className={styles.searchBar}>
            <FormControl type="text" onChange={e => filterProductsBar(e.target.value)} placeholder="Search" className="mr-sm-2" />
        </div>
    )
}

export default SearchBar