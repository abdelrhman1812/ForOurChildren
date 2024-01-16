import React from 'react'

const Services = () => {
    return <>
        <section className="services">
            <div className='container p-0' >
                <div className="row g-0">
                    <div className="col-md-4">
                        <div className="item red">
                            <div className="icon">
                                <img src={require('../../images/Services/icon-donation-grey.png')} className='w-100' alt="" />
                            </div>
                            <div className="text">
                                <p > بنوعي الاباء والامهات بالاساليب السليمه للتغذيه وبنا عادجات غذائيه سليميه وعلشان ولادنا بنعمل توعيه بأسليب التربيه الايجابيه والتعامل مع اطفالهم علشان ننشأ جيل سوي نفسيا</p>


                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="item yello">
                            <div className="icon">
                                <img src={require('../../images/Services/icon-dove-grey.png')} className='w-100' alt="" />
                            </div>
                            <div className="text">
                                <p > بنوعي الاباء والامهات بالاساليب السليمه للتغذيه وبنا عادجات غذائيه سليميه وعلشان ولادنا بنعمل توعيه بأسليب التربيه الايجابيه والتعامل مع اطفالهم علشان ننشأ جيل سوي نفسيا</p>

                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="item  green">
                            <div className="icon">
                                <img src={require('../../images/Services/icon-praying-grey.png')} className='w-100' alt="" />
                            </div>
                            <div className="text">
                                <p > بنوعي الاباء والامهات بالاساليب السليمه للتغذيه وبنا عادجات غذائيه سليميه وعلشان ولادنا بنعمل توعيه بأسليب التربيه الايجابيه والتعامل مع اطفالهم علشان ننشأ جيل سوي نفسيا</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
}

export default Services