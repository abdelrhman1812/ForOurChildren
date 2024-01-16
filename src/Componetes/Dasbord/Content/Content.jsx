import React from 'react'
import Head from '../Head/Head'
import Navdash from '../Navdash/Navdash'
import Welcome from '../Welcome/Welcome'

function Content() {
    return <>

        <div className="content">
            <Navdash />
            <Head name="الرئيسيه" />
            <div className="row " >
                <div className="col-lg-6 ">
                    <Welcome />
                </div>


            </div>


        </div>

    </>
}

export default Content