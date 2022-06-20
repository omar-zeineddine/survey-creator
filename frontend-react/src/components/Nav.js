import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Nav = () => {
  const Navigate = useNavigate();
  return (
    <header>
      <div className="container row">
        <a className="logo row" href="#">
          <img src={logo} alt="survey builder" />
        </a>
        <nav className="nav">
          <ul className="nav__list nav__list--primary">
            <li className="nav__item">
              <a href="#" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a id="get_categories" href="#" className="nav__link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Contact
              </a>
            </li>
          </ul>
          <ul className="nav__list nav__list--secondary">
            <li className="nav__item">
              <a
                href="#"
                className="nav__link"
                id="username"
                onClick={() => Navigate("/signup")}
              >
                Register
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#"
                className="btn nav__link nav__link--button"
                onClick={() => Navigate("/")}
              >
                Login
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
