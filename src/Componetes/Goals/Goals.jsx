import React from 'react'

const Goals = () => {
    return <>


        <div className="goals">
            <div className='container'>
                <h2> بنعمل اي علشان نوعي الاباء والامهات ؟</h2>

                <div className="row">
                    <div className="row g-3">
                        <div className="col-md-4">
                            <div className="item ">
                                <div className="image">
                                    <img src={require('../../images/Goals/1.jpg')} className='w-100' alt="" />
                                </div>
                                <div className="text">
                                    <p>محاضرات مع متخصصين لتعريف الاباء والامهات باﻷساليب السليمه للتعامل مع الابناء</p>
                                    <button className='btn btn-success w-100'> تفاصيل</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="item ">
                                <div className="image">
                                    <img src={require('../../images/Goals/2.jpg')} className='w-100' alt="" />
                                </div>
                                <div className="text">
                                    <p>متابعه تعامل الاباء والامهات مع ابناؤهم وحب المشكلات السلوكيه  للابناء من قبل المتخصصين</p>
                                    <button className='btn btn-danger w-100'> تفاصيل</button>

                                </div>

                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="item  ">
                                <div className="image">
                                    <img src={require('../../images/Goals/3.jpg')} className='w-100' alt="" />
                                </div>
                                <div className="text">

                                    <p>تعريف الابائ والامهات بالادوات التكنولوجيه مثل Google Family والمناهج العلميه التي تساعدهم علي متابعه ابناؤهم</p>
                                    <button className='btn btn-warning w-100 '> تفاصيل</button>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </>
}

export default Goals