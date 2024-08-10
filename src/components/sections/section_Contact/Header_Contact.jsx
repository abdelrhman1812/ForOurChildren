import { Link } from 'react-router-dom'

const Header_Contact = () => {
    return <>

        <div className="container-xxl over-lay  position-relative p-0">
            <section className="header-contact " >

                <ul className="p-2">
                    <li><Link to={'/'}>الصفحه الرئيسيه /</Link></li>
                    <li><Link to={'/doctors'} className="active"> تواصل معنا </Link></li>
                </ul>
            </section>
        </div>

    </>
}
export default Header_Contact