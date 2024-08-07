import { Link } from 'react-router-dom'
import doctor1 from '../../../assets/images/Doctor/1.jpg'
import '../../../pages/Doctors/Doctors'
const Doctors_item = () => {
    return <>

        <div className="container-xxl doctor-item">
            <h3>اطباؤنا</h3>
            <p>
                حیث نجمع نخبة من الخبراء المتخصصین في مجال تربیة الأطفال وتوجیھھم. فریقنا یضم مستشارین
                تربویین متمیزین، أطباء أطفال ذوي خبرة، وأطباء نفسیین ملتزمین بتقدیم الدعم الشامل لأطفالكم. نحن
                نؤمن بأھمیة التوجیھ الصحیح في بناء جیل صحي وسعید، ونسعى لتقدیم أفضل الاستشارات والخدمات
                .التي تساعدكم في تربیة أطفالكم وتوجیھھم نحو مستقبل مشرق
                نحن ھنا لنكون شركاءكم في ھذه الرحلة، ملتزمون بتوفیر بیئة آمنة وداعمة تساعد في نمو أطفالكم على
                جمیع الأصعدة الجسدیة والنفسیة والعقلیة. اكتشفوا معنا كیف یمكن لفریقنا المتخصص أن یكون شریكًا
                .موثوقًا لكم في رحلة تربیة أطفالكم
            </p>

            <div className="row g-4 m-0">
                <div className="col-md-6 col-lg-4">
                    <div className="item rounded-4 shadow p-2">
                        <figure>
                            <img src={doctor1} className='w-100 rounded-2' alt="" />
                        </figure>
                        <div className="data">
                            <h4 className='fw-bold'>Dr / Aya Salah</h4>
                            <p>اخصائي العلوم والتربیة قسم الكیمیاء </p>
                            <Link className='btn btn-danger w-50 mb-2 '>احجز الأن</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="item rounded-4 shadow p-2">
                        <figure>
                            <img src={doctor1} className='w-100 rounded-2' alt="" />
                        </figure>
                        <div className="data">
                            <h4 className='fw-bold'>Dr / Eman Othman</h4>
                            <p>اخصائي الإستشارات الأسریة  </p>
                            <Link className='btn btn-danger w-50 mb-2 '>احجز الأن</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="item rounded-4 shadow p-2">
                        <figure>
                            <img src={doctor1} className='w-100 rounded-2' alt="" />
                        </figure>
                        <div className="data">
                            <h4 className='fw-bold'>Dr / Salma Adel</h4>
                            <p>اخصائي الصحة النفسیة
                                والإرشاد الأسري</p>
                            <Link className='btn btn-danger w-50 mb-2 '>احجز الأن</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="item rounded-4 shadow p-2">
                        <figure>
                            <img src={doctor1} className='w-100 rounded-2' alt="" />
                        </figure>
                        <div className="data">
                            <h4 className='fw-bold'>Dr / Zahraa Mohammed</h4>
                            <p>اخصائي تعدیل سلوك , استشاري
                                نفسي وتربوي , مدربة تربیة إیجابیة</p>
                            <Link className='btn btn-danger w-50 mb-2 '>احجز الأن</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="item rounded-4 shadow p-2">
                        <figure>
                            <img src={doctor1} className='w-100 rounded-2' alt="" />
                        </figure>
                        <div className="data">
                            <h4 className='fw-bold'>Dr / Amira Anas </h4>
                            <p>اخصائي الدعم النفسي والصحة
                                النفسیة للطفل</p>
                            <Link className='btn btn-danger w-50 mb-2 '>احجز الأن</Link>
                        </div>
                    </div>
                </div>


            </div>
        </div>


    </>
}

export default Doctors_item