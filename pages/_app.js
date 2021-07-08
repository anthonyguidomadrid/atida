import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import LayoutIndex from '../components/layout/LayoutIndex'

function MyApp({ Component, pageProps }) {
  return <LayoutIndex><Component {...pageProps} /></LayoutIndex>
}

export default MyApp
