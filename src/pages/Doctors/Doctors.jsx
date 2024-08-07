import Doctors_item from "../../components/sections/section_doctors/Doctors_item"
import Header_doctor from "../../components/sections/section_doctors/Header_doctor"
import './doctors.css'
const Doctors = () => {
    return <>

        <section className="doctors">
            <Header_doctor />
            <Doctors_item />
        </section>

    </>
}

export default Doctors