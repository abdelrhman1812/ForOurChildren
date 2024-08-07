import { Link } from "react-router-dom"

const Header_Articles = () => {
    return <>

        <div className="container-xxl over-lay  position-relative p-0">
            <section className="header-article " >

                <ul className="p-2">
                    <li><Link to={'/'}>الصفحه الرئيسيه /</Link></li>
                    <li><Link to={'/doctors'} className="active"> الأطباء </Link></li>
                </ul>
            </section>
        </div>


    </>
}

export default Header_Articles