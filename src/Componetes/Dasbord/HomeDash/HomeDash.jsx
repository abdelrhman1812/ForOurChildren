import React from 'react'
import { Outlet } from 'react-router-dom'
import SidBar from '../SidBar/SidBar'

function HomeDash() {
    return <>



        <div className="HomeDash">
            <SidBar />
            <Outlet ></Outlet>

        </div>

    </>
}

export default HomeDash