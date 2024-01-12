import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Childrens = () => {


    const [childres, setChildres] = useState([]);





    useEffect(() => {

        const storedData = JSON.parse(localStorage.getItem('children')) || [];
        setChildres(storedData);
        console.log(storedData)
    }, []);

    return <>

        <div className="childrens">

            <div className='container'>
                <h2> <i class="fa-solid fa-child-reaching"></i>Your children</h2>
                <div className="row mt-3 g-3">
                    {childres?.map((child, index) => (
                        <div key={index} className=" col-md-6 col-lg-4">
                            <div className="item">
                                <div className="image">
                                    <img src={require(`../../images/Childrens/${child.image}`)} alt="" />

                                </div>
                                <div className="data">
                                    <h5>Name : <span>{child.name}</span></h5>
                                    <h5>Gender : <span>{child.gender}</span></h5>
                                    <h5>Age : <span>{child.age}</span></h5>
                                    <div className="icons">
                                        <i className="fa-solid fa-pen-nib"></i>
                                        <i className="fa-solid fa-trash"></i>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <Link className='return' to={'/registerChildren'}>  Return To Register <i className="fa-solid fa-retweet"></i>      </Link>




                </div>
            </div>
        </div>


    </>
}

export default Childrens