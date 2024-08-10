import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/Nav/logo.png';

const Navbar = () => {
    return (
        <div className='container-xxl p-0'>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <Link className="navbar-brand logo" to="/">
                        <img src={logo} alt="Logo" />
                    </Link>

                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa-solid fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                    aria-current="page"
                                    to="/home"
                                >
                                    <span>الرئيسيه</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                    aria-current="page"
                                    to="/about"
                                >
                                    <span>من نحن</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                    aria-current="page"
                                    to="/doctors"
                                >
                                    <span>أطباء</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                    aria-current="page"
                                    to="/articles"
                                >
                                    <span>مقالات</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                    aria-current="page"
                                    to="/games"
                                >
                                    <span>ألعاب</span>
                                </NavLink>
                            </li>
                        </ul>
                        <Link to={'/contact'} className='btn btn-danger'>تواصل معنا</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
