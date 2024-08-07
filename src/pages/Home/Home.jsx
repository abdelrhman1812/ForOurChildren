
import About_us from '../../components/sections/section_About/About_us'
import Achievements from '../../components/sections/section_home/Achievements'
import Details from '../../components/sections/section_home/Details'
import Goals from '../../components/sections/section_home/Goals'
import Header from '../../components/sections/section_home/Header'
import Services from '../../components/sections/section_home/Services'
import './home.css'
const Home = () => {
    return <>

        <Header />
        <Services />
        <About_us />
        <Goals />
        <Achievements />
        <Details />
        {/* <Sharing /> */}
    </>
}

export default Home
