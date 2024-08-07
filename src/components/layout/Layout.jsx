import { Outlet } from 'react-router-dom'
import Footer from '../common/Footer'
import Navbar from '../common/Navbar'

const Layout = () => {
    return <>

        <Navbar />
        <Outlet />
        <Footer />
    </>
}

export default Layout