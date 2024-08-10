import { Link } from "react-router-dom"

const Contact_Us_Section = () => {
    return <>

        <div className="container-xxl contact_us pt-5 px-0">
            <h3 className="text-center">یمكنك التواصل معنا للتبلیغ عن أي خطأ أو اي مشكلة واجھتك في اي خدمة من خدماتنا . </h3>

            <div className="container-xxl py-5">
                <div className="row g-3 m-0 py-5">
                    <div className="col-md-6 col-lg-3">
                        <div className="item shadow text-center p-2 rounded-2 ">
                            <i className="fa-regular fa-envelope"></i>
                            <p> البريد الالكتروني </p>
                            <Link
                                to="mailto:forourchildrenofficial@gmail.com"
                                className="text-black"
                                target="_blank">
                                forourchildrenofficial@gmail.com
                            </Link>
                        </div>
                    </div>
                    {/* Phone */}
                    <div className="col-md-6 col-lg-3">
                        <div className="item shadow text-center p-2 rounded-2">
                            <i className="fa-solid fa-phone"></i>
                            <p> رقم الهاتف  </p>
                            <Link
                                to="tel:01014316195"
                                className="text-black"
                                target="_blank">
                                01014316195
                            </Link>
                        </div>
                    </div>
                    {/* Face book */}
                    <div className="col-md-6 col-lg-3">
                        <div className="item shadow text-center p-2 rounded-2">
                            <i className="fa-brands fa-facebook"></i>
                            <p>  فيس بوك </p>
                            <Link
                                to="https://www.facebook.com/Forourchildren1?locale=ar_AR"
                                className="text-black"
                                target="_blank">
                                عشان ولادنا
                            </Link>
                        </div>
                    </div>

                    {/* What`s */}
                    <div className="col-md-6 col-lg-3">
                        <div className="item shadow text-center p-2 rounded-2">
                            <i className="fa-brands fa-whatsapp"></i>                            <p> واتساب   </p>
                            <Link
                                to="https://wa.me/+2001014316195?text=  مرحبا كيف يمكننا مساعدتك"
                                className="text-black"
                                target="_blank">
                                01014316195
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-xxl pt-5 form">
                <div className="row m-0">
                    <div className="col-md-6">
                        <div className="image"></div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-data">
                            <input type="text" placeholder="الاسم" className=" my-3 form-control" />
                            <input type="text" placeholder="البريد الالكتروني" className=" my-3 form-control" />
                            <textarea placeholder="رسالتك" rows={8} className=" my-3 form-control"></textarea>
                            <button className="btn btn-danger w-50 mb-5">ارسال</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    </>
}

export default Contact_Us_Section