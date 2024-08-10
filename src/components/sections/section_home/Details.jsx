import Aos from 'aos';
import { useEffect } from 'react';
import one from '../../../assets/images/Details/1.jpg';
import two from '../../../assets/images/Details/2.jpg';
const Details = () => {
    useEffect(() => {

        Aos.init({
            offset: 200,
            // duration: 1000,
            easing: 'ease-in-sine',
            delay: 0,
        });
    }, [])
    return <>

        <div className='container-xxl details'>
            <div className="row g-3 m-0">
                <div className="col-lg-4" >
                    <div className="item" data-aos="fade-up"
                        data-aos-anchor-placement="center-center">
                        <h3>
                            تسهم المبادرة بشكل كبیر
                            في تحقیق التنمیة
                            المستدامة من خلال
                            التوعیة والإرشاد، حیث
                            تستهدف بناء عادات قویة
                            للأطفال منذ الطفولة، مما
                            یؤثر بشكل إیجابي على
                            مسار حیاتهم ویعزز
                            مشاركتهم الفعّالة في
                            تحقیق التنمیة للمجتمع                                </h3>
                        <p>علشان ولادنا ھي مبادرة شبابیة فردیة مجتمعیة تستقطب متطوعین من الشباب الجامعي تم تأسیسھا عام
                            2019 تقوم بتوعیة الآباء والأمھات بأسالیب التربیة الإیجابیة بھدف بناء جیل سوي نفسیا وصحیا
                            وسلوكیا .</p>
                        <button>تواصل معنا </button>
                    </div>

                </div>


                <div className="col-lg-4 col-6">
                    <div className="image" data-aos="fade-up"
                        data-aos-anchor-placement="center-center">
                        <img src={one} alt="" />
                    </div>
                </div>

                <div className="col-lg-4 col-6">
                    <div className="image" data-aos="fade-up"
                        data-aos-anchor-placement="center-center">
                        <img src={two} alt="" />
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default Details