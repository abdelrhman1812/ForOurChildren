import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {

    /* Change Color Links  */
    function active(e) {
        let links = document.querySelectorAll(".collapse a")
        for (let i = 0; i < links.length; i++) {
            links[i].classList.remove("active");
            e.target.classList.add("active");
            // console.log(e.target)
        }
    }

    return <>

        <nav className="navbar navbar-expand-lg  fixed-top">
            <div className="container">
                <Link className="navbar-brand" to={"/"}>
                    <img src={require('../../images/logo-removebg-preview.png')} alt="" />
                </Link>

                {/* Links show it in mobile */}
                <ul className="navbar-nav m-auto  mb-lg-0  d-none  icons">
                    <Link to={'registerChildren'}> <img src={require('../../images/Icons/user.png')} alt="user" /></Link>
                    <Link to={'doctor'}>  <img src={require('../../images/Icons/doctor.png')} alt="doctor" />   </Link>
                    <Link to={'artical'}>  <img src={require('../../images/Icons/Notes.png')} alt="notes" />   </Link>
                    <Link to={'notices'}>   <img src={require('../../images/Icons/belll.png')} alt="bell" /></Link>
                    <Link to={'childrens'}>    <img src={require('../../images/Icons/children.png')} alt="sons" /> </Link>
                </ul>

                <i className=" navbar-toggler fa-solid fa-bars border-0" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"></i>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link onClick={(e) => { active(e) }} className="nav-link active" aria-current="page" to="/">الرئيسيه</Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={(e) => { active(e) }} className="nav-link " aria-current="page" to="about">من نحن ؟ </Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={(e) => { active(e) }} className="nav-link " aria-current="page" to="about"> خدماتنا </Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={(e) => { active(e) }} className="nav-link " aria-current="page" to="contact">اتصل بنا</Link>
                        </li>
                        <li className="nav-item d-block d-lg-none">
                            <Link onClick={(e) => { active(e) }} className="nav-link" to="login">تسجيل الخروج</Link>
                        </li>
                    </ul>
                    {/* Links show it in PC */}

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0  d-lg-flex icons">
                        <Link to={'registerChildren'}> <img src={require('../../images/Icons/user.png')} alt="" /></Link>
                        <Link to={'doctor'}>  <img src={require('../../images/Icons/doctor.png')} alt="" />   </Link>
                        <Link to={'artical'}>  <img src={require('../../images/Icons/Notes.png')} alt="" />   </Link>
                        <Link to={'notices'}>   <img src={require('../../images/Icons/belll.png')} alt="" /></Link>
                        <Link to={'childrens'}>    <img src={require('../../images/Icons/children.png')} alt="" />    </Link>
                        <li className="nav-item d-none d-lg-block">
                            <Link className="nav-link login" to="login">تسجيل الخروج</Link>
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