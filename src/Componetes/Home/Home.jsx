import React from 'react'
import Achievements from '../Achievements/Achievements'
import Details from '../Details/Details'
import Goals from '../Goals/Goals'
import Header from '../Header/Header'
import Services from '../Services/Services'
import Sharing from '../sharing/sharing'

const Home = () => {
    return <>
        <Header />
        <Services />
        <Goals />
        <Achievements />
        <Details />
        <Sharing />

    </>
}

export default Home