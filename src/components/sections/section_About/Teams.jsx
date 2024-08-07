import leader from '../../../assets/images/Team/leader.jpeg'
import s from '../../../assets/images/Team/s-vector.jpg'
const Teams = () => {
    return <>
        <div className='container-xxl team'>
            <h5>فريقنا</h5>
            <h2>أعضاء الفريق الرئيسي</h2>
            <div className="row g-3">
                <div className="col-md-4">

                    <div className="item" data-aos="fade-right" data-aos-duration="1000">
                        <figure>
                            <img src={leader} className='w-100' alt="" />
                            <figcaption>
                                <p>Full Name</p>
                                <span>Designation</span>
                            </figcaption>
                        </figure>
                        <div className="social">
                            <i className=' fa-brands fa-facebook'></i>
                            <i className=' fa-brands fa-twitter'></i>
                            <i className=' fa-brands fa-instagram'></i>

                        </div>
                    </div>
                </div>

                <div className="col-md-4">

                    <div className="item " data-aos="fade-left" data-aos-duration="1000">
                        <figure>
                            <img src={s} className='w-100' alt="" />
                            <figcaption>
                                <p>Full Name</p>
                                <span>Designation</span>
                            </figcaption>
                        </figure>
                        <div className="social">
                            <i className=' fa-brands fa-facebook'></i>
                            <i className=' fa-brands fa-twitter'></i>
                            <i className=' fa-brands fa-instagram'></i>

                        </div>
                    </div>
                </div>
                <div className="col-md-4">

                    <div className="item " data-aos="fade-left" data-aos-duration="1000">
                        <figure>
                            <img src='https://static.vecteezy.com/system/resources/thumbnails/002/002/257/small/beautiful-woman-avatar-character-icon-free-vector.jpg' className='w-100' alt="" />
                            <figcaption>
                                <p>Full Name</p>
                                <span>Designation</span>
                            </figcaption>
                        </figure>
                        <div className="social">
                            <i className=' fa-brands fa-facebook'></i>
                            <i className=' fa-brands fa-twitter'></i>
                            <i className=' fa-brands fa-instagram'></i>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Teams