
const Achievements_about = () => {
    return <>

        <div className="container-xxl py-5 achievements_about ">
            <div className="container p-2 ">
                <h5 >إنجازاتنا</h5>
                <p className=" text-center text-light-emphasis">
                    حققت مبادرة علشان ولدنا العدید من الإنجازات الملهمة والمشاركات الفعالة في مختلف المحافل
                    والأحداث، ومن أبرز إنجازاتها:
                </p>

                <div className="row g-4 my-5" >
                    <div className="col-lg-3 col-sm-6  " >
                        <div className="item">
                            <div className="item-icon bg-primary">
                                <span className="bg-primary"></span>
                                <i className="fa fa-bus-alt fa-3x text-primary"></i>
                                <span className="bg-primary"></span>
                            </div>
                            <div className="item-text bg-primary">
                                {/* <h3 className="text-primary mb-3">School Bus</h3> */}
                                <p className="mb-0 ">
                                    المركز الأول في الأسبوع العالمي لریادة الأعمال بالجامعة الأمریكیة.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="item">
                            <div className="item-icon bg-success">
                                <span className="bg-success"></span>
                                <i className="fa fa-futbol fa-3x text-success"></i>
                                <span className="bg-success"></span>
                            </div>
                            <div className="item-text bg-success">
                                {/* <h3 className="text-success mb-3">Playground</h3> */}
                                <p className="mb-0 ">
                                    المركز الأول على مستوى جامعات مصر في مسابقة ملتقى الاتحادات الطلابیة.                                    </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="item">
                            <div className="item-icon bg-warning">
                                <span className="bg-warning"></span>
                                <i className="fa fa-home fa-3x text-warning"></i>
                                <span className="bg-warning"></span>
                            </div>
                            <div className="item-text bg-warning">
                                {/* <h3 className="text-warning mb-3">Healthy Canteen</h3> */}
                                <p className="mb-0 ">
                                    الفوز على المستوى الوطني** في مسابقة أثر الشباب التابعة لمكتب الأمم المتحدة UNODC.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="item">
                            <div className="item-icon bg-info">
                                <span className="bg-info"></span>
                                <i className="fa fa-chalkboard-teacher fa-3x text-info"></i>
                                <span className="bg-info"></span>
                            </div>
                            <div className="item-text bg-info">
                                {/* <h3 className="text-info mb-3">Positive Learning</h3> */}
                                <p className="mb-0 ">
                                    الفوز على المستوى الوطني** في مسابقة أثر الشباب التابعة لمكتب الأمم المتحدة UNODC.
                                </p>                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default Achievements_about;