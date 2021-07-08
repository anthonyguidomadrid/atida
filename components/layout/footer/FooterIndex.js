import styles from './FooterIndex.module.css'
import logo from './logo-white.jpg'
import Image from 'next/image'

const FooterIndex = () => {
    return (
        <div className={styles.footer}>
            <hr></hr>
            <div >
            <Image src={logo} alt="Black Restaurant Logo"/>
            </div>
            <p>Copyright © 2021 ATIDA. All rights reserved.</p>
        </div>
    )
}

export default FooterIndex