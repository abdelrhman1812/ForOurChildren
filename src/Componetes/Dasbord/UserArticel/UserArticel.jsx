import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Head from '../Head/Head';
import Navdash from '../Navdash/Navdash';

function UserArticel() {



    const [artical, setChildres] = useState([]);



    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('articleContent'));
        const childrenArray = Array.isArray(storedData) ? storedData : [];

        setChildres(childrenArray);
        console.log(childrenArray);
    }, []);
    return <>


        <div className="content">
            <Navdash />
            <Head name="مقالاتي " />

            <div className="row">

                {artical.length === 0 ?
                    <div className='col-md-6'>
                        <div className="userArtical">

                            <div className="image">
                                <img src={require('../../../images/Articals/1.jpg')} alt="" />
                            </div>

                            <div className="articalDescription">
                                <h3> اضغط لاضافه مقال الان </h3>
                                <p>المقال</p>
                                <span>الاسم </span>
                                <span>البريد الاكتروني </span>


                            </div>
                        </div>
                    </div>
                    :
                    <>
                        {artical?.map((artical, index) =>
                            <div key={index} className='col-md-6'>
                                <div className="userArtical">
                                    <h3>{artical.title}</h3>

                                    <div className="image">
                                        <img src={artical.imgurl} alt={artical.title} />
                                    </div>

                                    <p>{artical.description}</p>
                                    <div className="info">
                                        <h6>{artical.name} </h6>
                                        <span>
                                            <a href="mailto:${article.email}" className="text-black">
                                                <img src={require('../../../images/Dasbord/User Articel/gmail-svgrepo-com.png')} alt="" />
                                            </a>
                                            <Link to={`https://wa.me/+20${artical.phone}?text=welcome`} target="_blank">
                                                <img src={require('../../../images/Dasbord/User Articel/whatsapp-whats-app-svgrepo-com.png')} alt="" />
                                            </Link>

                                        </span>


                                    </div>
                                </div>
                            </div>
                        )}
                    </>

                }
            </div>

        </div>

    </>
}

export default UserArticel