import About_us from '../../components/sections/section_About/About_us'
import Achievements_about from '../../components/sections/section_About/Achievements_about'
import Header_about from '../../components/sections/section_About/Header_about'
import Teams from '../../components/sections/section_About/Teams'
import './about.css'
const About = () => {
    return <>
        <Header_about />
        <About_us />
        <Achievements_about />
        {/* <Services_about /> */}
        <Teams />

    </>
}

export default About
