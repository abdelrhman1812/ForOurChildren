import Aos from 'aos';
import { useEffect } from 'react';
import Abdelrhman from '../../../assets/images/Team/Abdelrhman.png';
import leader from '../../../assets/images/Team/leader.jpeg';
import s from '../../../assets/images/Team/s-vector.jpg';
const Teams = () => {
    useEffect(() => {

        Aos.init({
            offset: 200,
            // duration: 1000,
            easing: 'ease-in-sine',
            delay: 0,
        });
    }, [])
    return <>
        <div className='container-xxl team'>
            <h5 data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000">فريقنا</h5>
            <h2 data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">أعضاء الفريق الرئيسي</h2>
            <div className="row g-3">

                {/* Abdelftah */}
                <div className="col-md-6 col-lg-3">

                    <div className="item" data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">
                        <figure>
                            <img src={leader} className='w-100' alt="" />
                            <figcaption>
                                <p>عبدالفتاح أيمن </p>
                                <span>مؤسس المبادره</span>
                            </figcaption>
                        </figure>
                        <div className="social">
                            <i className=' fa-brands fa-facebook'></i>
                            <i className=' fa-brands fa-twitter'></i>
                            <i className=' fa-brands fa-linkedin'></i>
                        </div>
                    </div>
                </div>

                {/* Abdelrhman */}
                <div className="col-md-6 col-lg-3">

                    <div className="item" data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">
                        <figure>
                            <img src={Abdelrhman} className='w-100' alt="" />
                            <figcaption>
                                <p>عبدالرحمن علي</p>
                                <span>مطور الموقع</span>
                            </figcaption>
                        </figure>
                        <div className="social">
                            <i className=' fa-brands fa-facebook'></i>
                            <i className=' fa-brands fa-twitter'></i>
                            <i className=' fa-brands fa-linkedin'></i>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3">
                    <div className="item " data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">
                        <figure>
                            <img src={s} className='w-100' alt="" />
                            <figcaption>
                                <p>صفاء عدلان </p>
                                <span>معيد علوم الحاسب</span>
                            </figcaption>
                        </figure>
                        <div className="social">
                            <i className=' fa-brands fa-facebook'></i>
                            <i className=' fa-brands fa-twitter'></i>
                            <i className=' fa-brands fa-linkedin'></i>

                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="item " data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">
                        <figure>
                            <img src='https://static.vecteezy.com/system/resources/thumbnails/002/002/257/small/beautiful-woman-avatar-character-icon-free-vector.jpg' className='w-100' alt="" />
                            <figcaption>
                                <p>نور حارس</p>
                                <span>معيد تكنولوجيا المعلومات</span>
                            </figcaption>
                        </figure>
                        <div className="social">
                            <i className=' fa-brands fa-facebook'></i>
                            <i className=' fa-brands fa-twitter'></i>
                            <i className=' fa-brands fa-linkedin'></i>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Teams