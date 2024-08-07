import { Link } from 'react-router-dom';
import '../../assets/styles/footer.css';
const Footer = () => {
    return <>
        <footer>
            <div className="container-xxl  text-white-50 footer pt-5 ">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6">
                            <h3 className="text-white mb-4">تواصل معنا</h3>
                            <p className="mb-2"><i className="fa fa-map-marker-alt ms-3"></i>بورسعيد </p>
                            <p className="mb-2"><i className="fa fa-phone-alt ms-3"></i>01014316195</p>
                            <p className="mb-2"><i className="fa fa-envelope ms-3"></i>forourchildrenofficial@gmail.com</p>
                            <div className="d-flex pt-2">
                                <Link className="btn btn-outline-light btn-social" to=""><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-outline-light btn-social" to=""><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-outline-light btn-social" to=""><i className="fab fa-youtube"></i></Link>
                                <Link className="btn btn-outline-light btn-social" to=""><i className="fab fa-linkedin-in"></i></Link>
                            </div>
                        </div>


                        <div className="col-lg-4 col-md-6">
                            <h3 className="text-white mb-4">روابط سريعة</h3>
                            <Link className="btn link text-white-50" to=""> الرئيسية</Link>
                            <Link className="btn link text-white-50" to="">اتصل بنا</Link>
                            <Link className="btn link text-white-50" to="">مقالات</Link>
                            <Link className="btn link text-white-50" to=""> الأطباء</Link>
                            <Link className="btn link text-white-50" to="">معلومات عنا</Link>
                        </div>


                        {/* <div className="col-lg-3 col-md-6">
                            <h3 className="text-white mb-4">معرض الصور</h3>
                            <div className="row g-2 pt-2">
                                <div className="col-4">
                                    <img className="img-fluid rounded bg-light p-1" src="img/classes-1.jpg" alt="صورة 1" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid rounded bg-light p-1" src="img/classes-2.jpg" alt="صورة 2" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid rounded bg-light p-1" src="img/classes-3.jpg" alt="صورة 3" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid rounded bg-light p-1" src="img/classes-4.jpg" alt="صورة 4" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid rounded bg-light p-1" src="img/classes-5.jpg" alt="صورة 5" />
                                </div>
                                <div className="col-4">
                                    <img className="img-fluid rounded bg-light p-1" src="img/classes-6.jpg" alt="صورة 6" />
                                </div>
                            </div>
                        </div> */}

                        <div className="col-lg-4 col-md-6">
                            <h3 className="text-white mb-4">النشرة الإخبارية</h3>
                            <p>اشترك معنا</p>
                            <div className="position-relative mx-auto" >
                                <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="بريدك الإلكتروني" />
                                <button type="button" className="btn btn-danger py-2 position-absolute top-0 start-0 mt-2 ms-2">اشترك</button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        <div className=" text-center  mb-3 mb-md-0">
                            &copy;
                            <span className='ms-2'> جميع الحقوق محفوظة</span>
                            <Link target='_blank' to="https://www.linkedin.com/in/abdelrahman-ali-b3a343284/">Abdelrhman Ali</Link>
                        </div>

                    </div>
                </div>
            </div >

        </footer >
    </>


};

export default Footer;
