import Aos from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Header_doctor = () => {

    useEffect(() => {

        Aos.init({
            offset: 200,
            // duration: 1000,
            easing: 'ease-in-sine',
            delay: 0,
        });
    }, [])
    return <>


        <div className="container-xxl over-lay  position-relative p-0">
            <section className="header-doctor " >

                <ul className="p-2" data-aos="zoom-in">
                    <li><Link to={'/'}>الصفحه الرئيسيه /</Link></li>
                    <li><Link to={'/doctors'} className="active"> الأطباء </Link></li>
                </ul>
            </section>
        </div>



    </>
}

export default Header_doctor