import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return <>

        <nav className="navbar navbar-expand-lg ">
            <div className="container">
                <Link className="navbar-brand" to={"/"}>
                    <img src={require('../../images/logo.jpeg')} alt="" />
                </Link>

                <ul className="navbar-nav m-auto mb-2 mb-lg-0 d-block d-lg-none  icons">
                    <Link to={'registerChildren'}> <img src={require('../../images/Icons/user.png')} alt="" /></Link>

                    <Link to={'doctor'}>  <img src={require('../../images/Icons/doctor.png')} alt="" />   </Link>
                    <Link to={'artical'}>  <img src={require('../../images/Icons/note.png')} alt="" />   </Link>


                    <Link to={'notices'}>   <img src={require('../../images/Icons/bell.png')} alt="" /></Link>

                    <Link to={'childrens'}>    <img src={require('../../images/Icons/son.png')} alt="" />    </Link>

                    {/* <li className="nav-item">
                            <Link className="nav-link " to="register">Registrt</Link>
                        </li> */}
                </ul>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">الرئيسيه</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about">من نحن ؟ </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about"> خدماتنا </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/contact">اتصل بنا</Link>
                        </li>
                        <li className="nav-item d-block d-lg-none">
                            <Link className="nav-link" to="login">تسجيل الخروج</Link>
                        </li>
                    </ul>

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-none d-lg-flex icons">
                        <Link to={'registerChildren'}> <img src={require('../../images/Icons/user.png')} alt="" /></Link>

                        <Link to={'/doctor'}>  <img src={require('../../images/Icons/doctor.png')} alt="" />   </Link>
                        <Link to={'/artical'}>  <img src={require('../../images/Icons/note.png')} alt="" />   </Link>


                        <Link to={'/notices'}>   <img src={require('../../images/Icons/bell.png')} alt="" /></Link>

                        <Link to={'/childrens'}>    <img src={require('../../images/Icons/son.png')} alt="" />    </Link>
                        <li className="nav-item d-none d-lg-block">
                            <Link className="nav-link" to="login">تسجيل الخروج</Link>
                        </li>

                        {/* <li className="nav-item">
                            <Link className="nav-link " to="register">Registrt</Link>
                        </li> */}
                    </ul>

                </div>
            </div>
        </nav>

    </>
}

export default NavBar