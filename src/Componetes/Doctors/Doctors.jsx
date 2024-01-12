import React from 'react'
import { Link } from 'react-router-dom'

const Doctors = () => {
    return <>


        <div className="doctors">
            <div className='container'>
                <h2> <i class="fa-solid fa-user-doctor"></i>Our doctors</h2>

                <div className='row g-3 mt-3'>
                    <div className="col-md-6 col-lg-4">

                        <div className="item">
                            <i class="fa-solid fa-stethoscope"></i>
                            <div className="image">
                                <img src={require('../../images/Childrens/abdelrhman.jpg')} alt="" />
                            </div>
                            <div className="data">
                                <h3>Dr. Abdelrhman</h3>
                                <span>Children's mental health specialist</span>
                                <Link> Read More</Link>
                                <button>Book Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">

                        <div className="item">
                            <i class="fa-solid fa-stethoscope"></i>
                            <div className="image">
                                <img src={require('../../images/Childrens/ody.jpg')} alt="" />
                            </div>
                            <div className="data">
                                <h3>Dr. Abdelrhman</h3>
                                <span>Children's mental health specialist</span>
                                <Link> Read More</Link>
                                <button>Book Now</button>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-6 col-lg-4">

                        <div className="item">
                            <i class="fa-solid fa-stethoscope"></i>
                            <div className="image">
                                <img src={require('../../images/Childrens/abdelrhman.jpg')} alt="" />
                            </div>
                            <div className="data">
                                <h3>Dr. Abdelrhman</h3>
                                <span>Children's mental health specialist</span>
                                <Link> Read More</Link>
                                <button>Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    </>
}

export default Doctors