
import Aos from 'aos';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import aboutImage1 from '../../../assets/images/About/about-us/about-1.jpg';
import aboutImage2 from '../../../assets/images/About/about-us/about-2.jpg';
import aboutImage3 from '../../../assets/images/About/about-us/about-3.jpg';
import leader from '../../../assets/images/About/about-us/leader.jpeg';

const About_us = () => {
    useEffect(() => {

        Aos.init({
            offset: 200,
            // duration: 1000,
            easing: 'ease-in-sine',
            delay: 0,
        });
    }, [])
    return <>
        <section className='about-us'>
            <div className="container-xxl py-5 bg-light">
                <div className="container py-2">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6  " data-aos="fade-left">
                            {/* <span className="mb-4 fs-2 text-light-emphasis">مرحبًا بكم </span>
                            <h2>
                                نحن هنا لمساعدة كل من يحتاج إلى المساعدة
                            </h2>
                            <p >
                                علشان ولادنا هي مبادرة شبابیة فردیة مجتمعیة تستقطب متطوعین من الشباب الجامعي تم تأسیسها عام
                                2019 تقوم بتوعیة الآباء والأمهات بأسالیب التربیة الإیجابیة بهدف بناء جیل سوي نفسیا وصحیا
                                وسلوكیا .
                            </p> */}
                            <h3>اهدافنا</h3>

                            <p >نؤمن أن الأسرة هي المحور الرئیسي لتطویر المجتمع. رسالتنا هي توفیر الأدوات والموارد التي تحفّز الآباء
                                على تبني أسلوب حیاة تربوي یعزز التفاعل الإیجابي مع أطفالهم من خلال :</p>

                            <ul>
                                <li> تمكین الشباب لمواجهة ظاهرة العنف الأسري وتعزیز وعیهم بالمشكلة من خلال تدریبهم على برنامج
                                    متكامل یتضمن : دلیل الإرشاد الأسري والتعامل مع الأطفال والمراهقین , تحدید وتعریف
                                    المشكلات.
                                </li>
                                <li>
                                    توعیة الآباء والأمهات من خلال الشباب حول ظاهرة العنف الأسري بهدف مكافحة ظواهر العنف
                                    ضد الأطفال وهذا من خلال حملات التوعیة والمعسكرات التدریبیة و الدورات المسجلة
                                </li>
                            </ul>
                            <div className="row g-4 align-items-center">
                                <div className="col-sm-6" >
                                    <Link className="btn btn-danger w-100 w-md-50 rounded-pill py-2 px-5" to="/">تواصل معنا</Link>
                                </div>
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center gap-2">
                                        <img className="rounded-circle flex-shrink-0" src={leader} alt="User" style={{ width: '45px', height: '45px' }} />
                                        <div className="ms-3">
                                            <h6 className="text-primary mb-1 text-danger">عبدالفتاح ايمن</h6>
                                            <small>مؤسس ومدير المبادرة</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 about-img  " data-aos="fade-right" >
                            <div className="row">
                                <div className="col-12 text-center">
                                    <img className="img-fluid w-75 rounded-circle bg-img p-3" src={aboutImage1} alt="About 1" />
                                </div>
                                <div className="col-6 text-start" style={{ marginTop: '-150px' }}>
                                    <img className="img-fluid w-100 rounded-circle bg-img p-3" src={aboutImage2} alt="About 2" />
                                </div>
                                <div className="col-6 text-end" style={{ marginTop: '-150px' }}>
                                    <img className="img-fluid w-100 rounded-circle bg-img p-3" src={aboutImage3} alt="About 3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>

};

export default About_us;
