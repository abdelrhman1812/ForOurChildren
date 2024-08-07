import Aos from "aos";
import { useEffect } from "react";

const Header = () => {
    useEffect(() => {

        Aos.init({
            offset: 200,
            // duration: 1000,
            easing: 'ease-in-sine',
            delay: 0,
        });
    }, [])
    return <>


        <div className='container-xxl over-lay  position-relative  p-0'>

            <header >
                <div className="container">
                    <div className="row">
                        <div className="data">
                            <h1 data-aos="flip-up" data-aos-duration="1000">   مبادرة من أجل أطفالنا   </h1>
                            <p data-aos="zoom-out" data-aos-duration="1000">علشان ولادنا هما حاصرنا , هما المستقبل</p>
                            <div className="btns" data-aos="zoom-in" data-aos-duration="1000">
                                <button>عن المبادره</button>
                                <button>تواصل معنا</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header >

        </div>



    </>
}

export default Header