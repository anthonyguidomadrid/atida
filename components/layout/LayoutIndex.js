import MenuIndex from './menu/MenuIndex'
import FooterIndex from './footer/FooterIndex'

const LayoutIndex = (props) => {
    return (
    <div>
        <MenuIndex/>
        <main>{props.children}</main>
        <FooterIndex/>
    </div>
    )
}

export default LayoutIndex