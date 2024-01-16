import React from 'react'

const Footer = () => {
    return (
        <div className=' footer'>

            <div className='container'>

                <div className='row gy-5'>

                    <div className='col-md-6 col-lg-4'>
                        <div className="comapany">
                            <h5>علشان ولادنا</h5>
                            <ul>
                                <li>الرئيسيه</li>
                                <li>من نحن ؟</li>
                                <li>تواصل معنا</li>

                            </ul>
                        </div>
                    </div>

                    <div className='col-md-6 col-lg-4'>
                        <div className="contact-footer">
                            <h5>تواصل معنا</h5>
                            <div className="item">
                                <i className='fa fa-location-pin'></i>
                                <span>10 A , Mansoura</span>
                            </div>
                            <div className="item">
                                <i className='fa fa-phone'></i>
                                <span>01008034761</span>
                            </div>
                            <div className="item">
                                <i className="fa-regular fa-envelope"></i>
                                <span>abdelrhmnaali1812@gmail.com</span>
                            </div>
                            <div className="item-social">
                                <i className=' fa-brands fa-facebook'></i>
                                <i className=' fa-brands fa-twitter'></i>
                                <i className=' fa-brands fa-instagram'></i>
                                <i className=' fa-brands fa-google'></i>
                            </div>
                        </div>
                    </div>



                    <div className="col-md-6 col-lg-4">
                        <div className="newsletter">
                            <h5>الاشتراك في النشرة البريدية</h5>
                            <p>الرجاء كتابه البريد الالكتروني </p>
                            <div className='position-relative'>

                                <input type="text" placeholder='Your Email' className='form-control' />
                                <button>ارسال</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <p className='copyright'>
                powered by Abdelrhman
            </p>
        </div>
    )
}

export default Footer