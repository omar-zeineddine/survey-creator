import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

function Nav() {
  const [openForm, setSignup] = useState(false);

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
                onClick={() => {
                  setSignup(!openForm);
                }}
              >
                Register
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="btn nav__link nav__link--button">
                Login
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
