import Aos from "aos";
import { useEffect } from "react";



const Achievements = () => {
    useEffect(() => {

        Aos.init({
            offset: 200,
            // duration: 1000,
            easing: 'ease-in-sine',
            delay: 0,
        });
    }, [])
    return <>

        <div className="achievements">
            <div className='container-xxl'>
                <div className="row ">
                    <div className="col-md-6 p-0">
                        <div className="image">
                        </div>
                    </div>
                    <div className="col-md-6 d-flex p-3" >
                        <div className="row ">

                            <div className="item">
                                <div className="data">
                                    <h3>20000+</h3>
                                    <p>مشاهده كامله للفيديوهات التوعيه للمبارده علي السوشيال ميديا</p>
                                </div>
                                <i className="fa-brands fa-youtube"></i>                                </div>
                            <div className="item">
                                <div className="data">
                                    <h3>100+</h3>
                                    <p>اكثر من 100 ام حضروا التدريب الكامل للمبادره في المرحله الاولي</p>
                                </div>
                                <i className="fa-solid fa-users"></i>                                </div>
                            <div className="item">
                                <div className="data">
                                    <h3  > 70 +</h3>
                                    <p>اكثر من 70متطوع شاركوا معانا في لجان المبادره المختلفه</p>

                                </div>
                                <i className="fa-solid fa-children"></i>                                </div>
                            <div className="item">
                                <div className="data">
                                    <h3>150+</h3>
                                    <p>اكثر من 150 طفل تأثر بالمرحله الاولي للمبادره</p>
                                </div>
                                <i className="fa-solid fa-hands-holding-child"></i>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </div >

    </>
}

export default Achievements