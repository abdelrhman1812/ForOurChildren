import React from 'react'
import { Link } from 'react-router-dom'

const Doctors = () => {
    return <>


        <div className="doctors">
            <div className='container'>
                <h2> <i class="fa-solid fa-user-doctor"></i>أطباؤنا</h2>

                <div className='row g-3 mt-3'>
                    <div className="col-md-6 col-lg-4">

                        <div className="item">
                            <i class="fa-solid fa-stethoscope"></i>
                            <div className="image">
                                <img src={require('../../images/Doctor/1.jpg')} alt="" />
                            </div>
                            <div className="data">
                                <h3>د. محمد</h3>
                                <span>اخصائي الصحة النفسية للأطفال</span>
                                <Link> المزيد</Link>
                                <button>احجز اﻷن</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">

                        <div className="item">
                            <i class="fa-solid fa-stethoscope"></i>
                            <div className="image">
                                <img src={require('../../images/Doctor/2.jpg')} alt="" />
                            </div>
                            <div className="data">
                                <h3>د. عبد الرحمن</h3>
                                <span>اخصائي الصحة النفسية للأطفال</span>
                                <Link> المزيد</Link>
                                <button>احجز اﻷن</button>
                            </div>
                        </div>
                    </div>



                    <div className="col-md-6 col-lg-4">

                        <div className="item">
                            <i class="fa-solid fa-stethoscope"></i>
                            <div className="image">
                                <img src={require('../../images/Doctor/3.jpg')} alt="" />
                            </div>
                            <div className="data">
                                <h3>د.  احمد</h3>
                                <span>اخصائي الصحة النفسية للأطفال</span>
                                <Link> المزيد</Link>
                                <button>احجز اﻷن</button>
                            </div>
                        </div>
                    </div>





                </div>

            </div>
        </div>


    </>
}

export default Doctors