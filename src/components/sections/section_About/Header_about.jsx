import { Link } from "react-router-dom";

const Header_about = () => {
  return <>



    <div className="container-xxl over-lay  position-relative p-0">
      <section className="header-about " >

        <ul className="p-2">
          <li><Link to={'/'}>الصفحه الرئيسيه /</Link></li>
          <li><Link to={'about'} className="active">من نحن ؟ </Link></li>
        </ul>
      </section>
    </div>


  </>
}

export default Header_about;