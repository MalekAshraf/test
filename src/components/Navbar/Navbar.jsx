import { NavLink } from "react-router-dom";
import img from "../../assets/images/logor.png";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.nav}`}>
      <div className="container">
        <div>
          <img src={img} alt="logo" width="300" />
        </div>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <NavLink
                to={"home"}
                className={`nav-link mx-2 ${styles.homeLInk}`}
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"services"}
                className="nav-link mx-2"
                aria-current="page"
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"blog"} className="nav-link mx-2">
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"about"} className="nav-link mx-2">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"contact"} className="nav-link mx-2">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
