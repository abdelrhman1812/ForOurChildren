import Aos from 'aos'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import amira from '../../../assets/images/Doctor/Amira.jpeg'
import aya from '../../../assets/images/Doctor/Aya.jpeg'
import eman from '../../../assets/images/Doctor/Eman.jpeg'
import salma from '../../../assets/images/Doctor/salma.jpeg'
import zahraa from '../../../assets/images/Doctor/zahraa.jpeg'
import '../../../pages/Doctors/Doctors'
const Doctors_item = () => {


    useEffect(() => {

        Aos.init({
            offset: 200,
            // duration: 1000,
            easing: 'ease-in-sine',
            delay: 0,
        });
    }, [])

    return <>

        <div className="container-xxl doctor-item">
            <h3 data-aos="fade-down"
                data-aos-anchor-placement="center-center"
                data-aos-duration="1000">
                اطباؤنا</h3>
            <p data-aos="fade-down"
                data-aos-anchor-placement="center-center"
                data-aos-duration="1000">

                حیث نجمع نخبة من الخبراء المتخصصین في مجال تربیة الأطفال وتوجیھھم. فریقنا یضم مستشارین
                تربویین متمیزین، أطباء أطفال ذوي خبرة، وأطباء نفسیین ملتزمین بتقدیم الدعم الشامل لأطفالكم. نحن
                نؤمن بأھمیة التوجیھ الصحیح في بناء جیل صحي وسعید، ونسعى لتقدیم أفضل الاستشارات والخدمات
                .التي تساعدكم في تربیة أطفالكم وتوجیھھم نحو مستقبل مشرق
                نحن ھنا لنكون شركاءكم في ھذه الرحلة، ملتزمون بتوفیر بیئة آمنة وداعمة تساعد في نمو أطفالكم على
                جمیع الأصعدة الجسدیة والنفسیة والعقلیة. اكتشفوا معنا كیف یمكن لفریقنا المتخصص أن یكون شریكًا
                .موثوقًا لكم في رحلة تربیة أطفالكم
            </p>

            {/* Aya */}
            <div className="row g-4 m-0">
                <div className="col-md-6 col-lg-4">
                    <div className="item  rounded-4 shadow p-2" data-aos="zoom-in-down" data-aos-easing="linear"
                        data-aos-duration="1000" >
                        <figure className='overflow-hidden'>
                            <img src={aya} className='w-50 rounded-2' alt="" />
                        </figure>
                        <div className="data">
                            <h4 className='fw-bold'>دكتور / اية صلاح</h4>
                            <p>اخصائي العلوم والتربیة قسم الكیمیاء </p>
                            <Link
                                to="https://wa.me/+2001014316195?text= مرحبا دكتوره أيه"
                                target="_blank"
                                className='btn btn-danger w-50 mb-2 '>احجز الأن</Link>
                        </div>
                    </div>
                </div>

                {/* Eman */}

                <div className="col-md-6 col-lg-4">
                    <div className="item  rounded-4 shadow p-2" data-aos="zoom-in-down" data-aos-easing="linear"
                        data-aos-duration="1000" >
                        <figure className='overflow-hidden'>
                            <img src={eman} className='w-50 rounded-2' alt="" />
                        </figure>
                        <div className="data">
                            <h4 className='fw-bold'>دكتور / ايمان عثمان</h4>
                            <p>اخصائي الإستشارات الأسریة  </p>
                            <Link
                                to="https://wa.me/+2001014316195?text= مرحبا دكتوره ايمان"
                                target="_blank"
                                className='btn btn-danger w-50 mb-2 '>احجز الأن</Link>
                        </div>
                    </div>
                </div>
                {/* Amira */}
                <div className="col-md-6 col-lg-4">
                    <div className="item  rounded-4 shadow p-2" data-aos="zoom-in-down" data-aos-easing="linear"
                        data-aos-duration="1000">
                        <figure className='overflow-hidden'>
                            <img src={amira} className='w-50 rounded-2' alt="" />
                        </figure>
                        <div className="data">
                            <h4 className='fw-bold'>دكتور / اميره أنس</h4>
                            <p>اخصائي الدعم النفسي والصحة
                                النفسیة للطفل</p>
                            <Link
                                to="https://wa.me/+2001014316195?text= مرحبا دكتوره أميره"
                                target="_blank"
                                className='btn btn-danger w-50 mb-2 '>احجز الأن</Link>
                        </div>
                    </div>
                </div>

                {/* zahraa */}
                <div className="col-md-6 col-lg-4">
                    <div className="item  rounded-4 shadow p-2" data-aos="zoom-in-down" data-aos-easing="linear"
                        data-aos-duration="1000">
                        <figure className='overflow-hidden'>
                            <img src={zahraa} className='w-50 rounded-2' alt="" />
                        </figure>
                        <div className="data">
                            <h4 className='fw-bold'>دكتور / زهره محمد</h4>
                            <p>اخصائي تعدیل سلوك , استشاري
                                نفسي وتربوي , مدربة  </p>
                            <Link
                                to="https://wa.me/+2001014316195?text= مرحبا دكتوره زهره"
                                target="_blank"
                                className='btn btn-danger w-50 mb-2 '>احجز الأن</Link>
                        </div>
                    </div>
                </div>

                {/* salma */}


                <div className="col-md-6 col-lg-4">
                    <div className="item pb-5 rounded-4 shadow  p-2" data-aos="zoom-in-down" data-aos-easing="linear"
                        data-aos-duration="1000" >
                        <figure className='overflow-hidden'>
                            <img src={salma} className='w-50 rounded-2' alt="" />
                        </figure>
                        <div className="data">
                            <h4 className='fw-bold'>دكتور / سلمي عادل</h4>
                            <p>اخصائي الصحة النفسیة
                                والإرشاد الأسري</p>
                            <Link
                                to="https://wa.me/+2001014316195?text= مرحبا دكتوره سلمي"
                                target="_blank"
                                className='btn btn-danger w-50 mb-2 '>احجز الأن</Link>
                        </div>
                    </div>
                </div>




            </div>
        </div>


    </>
}

export default Doctors_item