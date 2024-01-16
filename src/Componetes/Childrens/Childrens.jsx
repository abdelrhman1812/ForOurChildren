import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Childrens = () => {


    const [childres, setChildres] = useState([]);



    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('children'));
        const childrenArray = Array.isArray(storedData) ? storedData : [];

        setChildres(childrenArray);
        console.log(childrenArray);
    }, []);

    return <>

        <div className="childrens">

            <div className='container'>
                <h2> <i className="fa-solid fa-child-reaching"></i>اطفالك</h2>
                <div className="row mt-3 g-3">
                    {childres.length === 0 ? <div className=" col-md-6 col-lg-4">
                        <div className="item">
                            <div className="image">
                                <img src={require(`../../images/Childrens/1.jpg`)} alt="" />

                            </div>
                            <div className="data">
                                <h5>الاسم : <span>مي عصام</span></h5>
                                <h5>العمر : <span>23</span></h5>
                                <h5>النوع : <span>أنثي</span></h5>
                                <div className="icons">
                                    <i className="fa-solid fa-pen-nib"></i>
                                    <i className="fa-solid fa-trash"></i>

                                </div>
                            </div>
                        </div>
                    </div> :
                        <>
                            {childres?.map((child, index) => (
                                <div key={index} className=" col-md-6 col-lg-4">
                                    <div className="item">
                                        <div className="image">
                                            <img src={require(`../../images/Childrens/${child.image}`)} alt="" />

                                        </div>
                                        <div className="data">
                                            <div className="details">

                                                <h5>الاسم : <span>{child.name}</span></h5>
                                                <h5>النوع : <span>{child.gender}</span></h5>
                                                <h5>العمر : <span>{child.age}</span></h5>
                                            </div>
                                            <div className="icons">
                                                <i className="fa-solid fa-pen-nib"></i>
                                                <i className="fa-solid fa-trash"></i>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>}


                    <Link className='return' to={'/registerChildren'}>  العوده للتسجيل <i className="fa-solid fa-retweet"></i>      </Link>




                </div>
            </div>
        </div>


    </>
}

export default Childrens