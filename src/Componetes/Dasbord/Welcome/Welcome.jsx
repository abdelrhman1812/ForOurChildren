import React from 'react'
import { Link } from 'react-router-dom'

function Welcome() {
    return <>
        <div className="welcome">
            <div className="row">
                <div className="col-md-6">
                    <div className="text">
                        <h2>مرحبا</h2>
                        <p>عبدالرحمن</p>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="image">
                        <img src={require('../../../images/Dasbord/Welcome/welcome.png')} alt="" />
                    </div>
                </div>

            </div>
            <img src={require('../../../images/Dasbord/Nav/avatar.png')} className='profile-welcom' alt="" />
            <div className="info">
                <div className="text d-flex justify-content-between  align-items-center">

                    <div className='text-center w-50'>
                        <h3>عبدالرحمن </h3>
                        <span>اخصائي اطفال</span>

                    </div>

                    <div className='text-center w-50'>
                        <h3>الحجز</h3>
                        <span>50</span>
                    </div>
                </div>
                <div className="btns">

                    <Link>الملف الشخصي</Link>
                </div>
            </div>
        </div>


    </>
}

export default Welcome