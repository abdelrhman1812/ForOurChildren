

import Aos from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Header_Games = () => {
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
            <section className="header-games " >

                <ul className="p-2" data-aos="fade-down" data-aos-duration="1000" >
                    <li><Link to={'/'}>الصفحه الرئيسيه /</Link></li>
                    <li><Link to={'games'} className="active">  العاب </Link></li>
                </ul>
            </section>
        </div>


    </>
}

export default Header_Games;