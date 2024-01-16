import React from 'react'

const Achievements = () => {
    return <>

        <div className="achievements">
            <div className='container'>
                <div className="row">
                    <div className="col-6 col-md-3">
                        <div className="item">
                            <img src={require("../../images/Achievements/social-media.png")} alt="" />
                            <h3>20000+</h3>
                            <p>مشاهده كامله للفيديوهات التوعيه للمبارده علي السوشيال ميديا</p>
                        </div>
                    </div>


                    <div className="col-6 col-md-3">
                        <div className="item">
                            <img src={require("../../images/Achievements/lecture.png")} alt="" />

                            <h3>100+</h3>
                            <p>اكثر من 100 ام حضروا التدريب الكامل للمبادره في المرحله الاولي</p>                        </div>
                    </div>




                    <div className=" col-6 col-md-3">
                        <div className="item">
                            <img src={require("../../images/Achievements/men.png")} alt="" />

                            <h3 h3 > 70 +</h3>
                            <p>اكثر من 70متطوع شاركوا معانا في لجان المبادره المختلفه</p>
                        </div>
                    </div>

                    <div className="col-6 col-md-3">
                        <div className="item">
                            <img src={require("../../images/Achievements/baby.png")} alt="" />

                            <h3>150+</h3>
                            <p>اكثر من 150 طفل تأثر بالمرحله الاولي للمبادره</p>
                        </div>
                    </div>

                </div>
            </div>
        </div >

    </>
}

export default Achievements