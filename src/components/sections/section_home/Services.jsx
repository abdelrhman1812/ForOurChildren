
import Aos from 'aos'
import { useEffect } from 'react'
import donation from '../../../assets/images/Services/icon-donation-grey.png'
import dove from '../../../assets/images/Services/icon-dove-grey.png'
import praying from '../../../assets/images/Services/icon-praying-grey.png'


const Services = () => {

    useEffect(() => {

        Aos.init({
            offset: 200,
            duration: 1000,
            easing: 'ease-in-sine',
            delay: 0,
        });
    }, [])
    return <>
        <div className=' container-xxl p-0  ' >
            <section className="services">
                <div className="row g-0  ">
                    <div className=" col-lg-4">
                        <div className="item red" data-aos="zoom-in-up">
                            <div className="icon">
                                <img src={donation} className='w-100' alt="" />
                            </div>
                            <div className="text">
                                <p >
                                    في زمن یعتبر فيه التواصل مع
                                    الأطفال تحدیًا، تبرز أهمية التفاعل
                                    بأسالیب تربیة إیجابیة. في هذا
                                    السیاق، نشیر إلى كیف یمكن
                                    للحظات صغیرة من الفهم
                                    والاهتمام أن تلوّ ن حیاة أطفالنا
                                    بسعادة وتأثیر إیجابي علشان كدا
                                    احنا بنوعي الأباء و الأمهات
                                    بالأسالیب السلیمة للتعامل مع
                                    أطفالهم علشان ولادنا علشان یبقوا
                                    أحسن
                                </p>


                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="item yellow" data-aos="zoom-in-up">
                            <div className="icon">
                                <img src={dove} className='w-100' alt="" />
                            </div>
                            <div className="text">
                                <p >
                                    دورنا مش بس نساعدك تعرف
                                    الطرق السلمیة للتعامل مع طفلك
                                    بطریقة تساعدك طفلك یُنشأ
                                    بطریقة سویة إحنا كمان هنساعدك
                                    تعرف أسالیب التغذیة السلیمة و
                                    طریقة بناء عادات غذائیة سلیمة
                                    تفرق معاه طول حیاته
                                </p>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="item  green" data-aos="zoom-in-up">
                            <div className="icon">
                                <img src={praying} className='w-100' alt="" />
                            </div>
                            <div className="text">
                                <p >
                                    طفلك أمانة !
                                    أطفالنا مش بس جزء من حاضرنا
                                    هما استثمارنا الحقیقي في مستقبلنا
                                    ومستقبل مجتمعنا فعلشان كده لازم
                                    كلنا كآباء أن نتحمل مسؤولیتنا و
                                    نؤدي أمانتنا وأن نحسن الغرس
                                    لیَحسُن الحصاد .
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div>

    </>
}

export default Services