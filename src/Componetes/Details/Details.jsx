import React from 'react'

const Details = () => {
    return <>

        <div className="details">
            <div className='container'>
                <div className="row g-3">
                    <div className="col-lg-4">
                        <div className="item">
                            <h3> نعمل للصالح العام إما عن طريق التوعية و الارشاد لتوجيه المجتمع </h3>

                            <p> تساهم المبادره بشكل كبير في تحقيق اعداف التنميه المستدامه كون  المبادره تستهدف بناء الاطفال وعاداتهم من الطفوله والتس تؤثر علي مجري حياة الاطفال بشكب كبيؤ</p>
                            <button>تواصل معنا </button>
                        </div>

                    </div>


                    <div className="col-lg-4 col-6">
                        <div className="image">
                            <img src={require('../../images/Details/1.jpg')} alt="" />
                        </div>
                    </div>

                    <div className="col-lg-4 col-6">
                        <div className="image">
                            <img src={require('../../images/Details/2.jpg')} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default Details