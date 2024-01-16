import React from 'react'

const Artical = () => {
    return <>

        <div className="articals">
            <div className='container'>
                <h2><i className='fa fa-book'></i>  مقالات </h2>
                <div className="row mt-3 g-3" >
                    <div className="col-md-6 col-lg-4">
                        <div className="item">
                            <figure><img src={require('../../images/Articals/1.jpg')} alt="" /></figure>
                            <h3>  ما الذي يحتاج اليه طفلك الرضيغ؟ </h3>
                            <p> بنظام الدكتور/ عبدالرحمن  اخصائي التربيه الايجابيه  </p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="item">
                            <figure><img src={require('../../images/Articals/2.jpg')} alt="" /></figure>
                            <h3>  ما الذي يحتاج اليه طفلك الرضيغ؟ </h3>
                            <p> بنظام الدكتور/ احمد  اخصائي التربيه الايجابيه  </p>
                        </div>
                    </div>



                    <div className="col-md-6 col-lg-4">
                        <div className="item">
                            <figure><img src={require('../../images/Articals/3.jpg')} alt="" /></figure>
                            <h3>  ما الذي يحتاج اليه طفلك الرضيغ؟ </h3>
                            <p> بنظام الدكتور/ محمد  اخصائي التربيه الايجابيه  </p>
                        </div>
                    </div>



                    <div className="col-md-6 col-lg-4">
                        <div className="item">
                            <figure><img src={require('../../images/Articals/4.jpg')} alt="" /></figure>
                            <h3>  ما الذي يحتاج اليه طفلك الرضيغ؟ </h3>
                            <p> بنظام الدكتوره/ مي  اخصائي التربيه الايجابيه  </p>
                        </div>
                    </div>



                </div>
            </div>

        </div>

    </>
}

export default Artical