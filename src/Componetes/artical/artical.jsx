import React from 'react'

const Artical = () => {
    return <>

        <div className="articals">
            <div className='container'>
                <h2><i className='fa fa-book'></i>  Articals </h2>
                <div className="row mt-3 g-3" >
                    <div className="col-md-6 col-lg-4">
                        <div className="item">
                            <figure><img src={require('../../images/Childrens/abdelrhman.jpg')} alt="" /></figure>
                            <h3>  Lorem ipsum dolor sit amet. ? </h3>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit..... </p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="item">
                            <figure><img src={require('../../images/Childrens/abdelrhman.jpg')} alt="" /></figure>
                            <h3>  Lorem ipsum dolor sit amet. ? </h3>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit..... </p>
                        </div>
                    </div>


                    <div className="col-md-6 col-lg-4">
                        <div className="item">
                            <figure><img src={require('../../images/Childrens/ody.jpg')} alt="" /></figure>
                            <h3>  Lorem ipsum dolor sit amet. ? </h3>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit..... </p>
                        </div>
                    </div>


                    <div className="col-md-6 col-lg-4">
                        <div className="item">
                            <figure><img src={require('../../images/Childrens/abdelrhman.jpg')} alt="" /></figure>
                            <h3>  Lorem ipsum dolor sit amet. ? </h3>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit..... </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </>
}

export default Artical