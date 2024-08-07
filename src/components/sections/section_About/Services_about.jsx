import services from '../../../assets/images/About/about-us/services.jpg'
import one from '../../../assets/images/About/Services/1.jpg'
import two from '../../../assets/images/About/Services/2.jpg'
import three from '../../../assets/images/About/Services/3.jpg'
import four from '../../../assets/images/About/Services/4.jpg'
import five from '../../../assets/images/About/Services/5.jpg'
import six from '../../../assets/images/About/Services/6.jpg'
const Services_about = () => {
    return <>

        <div className="container-xxl py-5 services_about bg-light ">

            <div className="container  ">

                <div className="row g-4">
                    <div className="col-lg-6">
                        <div className='image'>
                            <img src={services} className='w-75 mx-auto d-block rounded-3' alt="services" />
                        </div>

                    </div>
                    <div className="col-lg-6">
                        <h3>خدماتنا</h3>
                        <p className=" title  text-light-emphasis">
                            احنا بنقدم محاضرات وجلسات تفاعلیة لتعریف الآباء والأمهات بالأسالیب السلیمة للتعامل مع الأبناء
                            بجانب اننا بنعرف الآباء بالأدوات التكنولوجیة الحدیثة مثل Family Google والمناهج العلمیة التي
                            تساعدهم على متابعة أبنائهم
                        </p>
                        <button className='btn btn-danger w-25'>ابدأ الان</button>
                    </div>
                    <div className="row py-5 g-3">
                        <div className="col-md-6 col-lg-4">
                            <div className="item">
                                <figure>
                                    <img src={one} className='w-100 rounded-4' alt="" />
                                </figure>
                                <p>
                                    <i className="fa-solid fa-users"></i>
                                    جلسات التوجيه الشخصي

                                </p>

                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="item">
                                <figure>
                                    <img src={two} className='w-100 rounded-4' alt="" />
                                </figure>
                                <p>
                                    <i className="fa-regular fa-building"></i>
                                    ورش العمل التربوية
                                </p>

                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="item">
                                <figure>
                                    <img src={three} className='w-100 rounded-4' alt="" />
                                </figure>
                                <p>
                                    <i className="fa-solid fa-book"></i>
                                    تقديم مواد تروية
                                </p>

                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="item">
                                <figure>
                                    <img src={four} className='w-100 rounded-4' alt="" />
                                </figure>
                                <p>
                                    <i className="fa-solid fa-laptop"></i>
                                    برامج النعليم الالكتروني
                                </p>

                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="item">
                                <figure>
                                    <img src={five} className='w-100 rounded-4' alt="" />
                                </figure>
                                <p>
                                    <i className="fa-solid fa-marker"></i>
                                    تقيم تقدم الطفل
                                </p>

                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="item">
                                <figure>
                                    <img src={six} className='w-100 rounded-4' alt="" />
                                </figure>
                                <p>
                                    <i className="fa-brands fa-facebook-messenger"></i>
                                    دعم الاسره والتواصل
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>


    </>
}

export default Services_about