
import Aos from 'aos'
import { useEffect } from 'react'
import one from '../../../assets/images/Goals/1.jpg'
import two from '../../../assets/images/Goals/2.jpg'
import three from '../../../assets/images/Goals/3.jpg'

const Goals = () => {
    useEffect(() => {

        Aos.init({
            offset: 200,
            duration: 1000,
            easing: 'ease-in-sine',
            delay: 0,
        });
    }, [])
    return <>


        <div className="goals overflow-hidden">
            <div className='container-xxl py-5  bg-goals'>
                <h2 className='py-5'> بنعمل اي علشان نوعي الاباء والامهات ؟</h2>

                <div className="row g-3 m-0">
                    <div className="col-md-4" data-aos="fade-right">
                        <div className="item ">
                            <div className="image">
                                <img src={one} className='w-100' alt="" />
                            </div>
                            <div className="text">
                                <p>محاضرات مع متخصصين لتعريف الاباء والامهات باﻷساليب السليمه للتعامل مع الابناء</p>
                                <button className='btn btn-success w-100'> تفاصيل</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="fade-up">
                        <div className="item ">
                            <div className="image">
                                <img src={two} className='w-100' alt="" />
                            </div>
                            <div className="text">
                                <p>متابعه تعامل الاباء والامهات مع ابناؤهم وحب المشكلات السلوكيه  للابناء من قبل المتخصصين</p>
                                <button className='btn btn-danger w-100'> تفاصيل</button>

                            </div>

                        </div>
                    </div>

                    <div className="col-md-4" data-aos="fade-left">
                        <div className="item">
                            <div className="image">
                                <img src={three} className='w-100' alt="" />
                            </div>
                            <div className="text">

                                <p>تعريف الابائ والامهات بالادوات التكنولوجيه مثل Google Family والمناهج العلميه التي تساعدهم علي متابعه ابناؤهم</p>
                                <button className='btn btn-warning w-100 '> تفاصيل</button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </>
}

export default Goals