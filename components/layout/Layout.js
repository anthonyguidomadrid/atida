import Menu from './Menu'
import Footer from './Footer'

const Layout = (props) => {
    return (
    <div>
        <Menu></Menu>
        <main>{props.children}</main>
        <Footer></Footer>
    </div>
    )
}

export default Layout