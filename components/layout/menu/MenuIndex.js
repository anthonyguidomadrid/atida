import { Nav, Navbar } from 'react-bootstrap'
import styles from './MenuIndex.module.css'
import Image from 'next/image'
import logo from './logo.jpg'

const MenuIndex = () => {
    return (
    <Navbar className={styles.menu} bg="light" expand="lg">
    <Navbar.Brand href="/"><Image src={logo} alt='restaurant logo'/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="/">Our products</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
)
}

export default MenuIndex