import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

function Nav() {
  return (
    <header>
      <div class="container row">
        <a class="logo row" href="#">
          <img src={logo} alt="survey builder" />
        </a>
        <nav class="nav">
          <ul class="nav__list nav__list--primary">
            <li class="nav__item">
              <a href="#" class="nav__link">
                Home
              </a>
            </li>
            <li class="nav__item">
              <a id="get_categories" href="#" class="nav__link">
                About
              </a>
            </li>
            <li class="nav__item">
              <a href="#" class="nav__link">
                Contact
              </a>
            </li>
          </ul>
          <ul class="nav__list nav__list--secondary">
            <li class="nav__item">
              <a href="#" class="nav__link" id="username">
                Register
              </a>
            </li>
            <li class="nav__item">
              <a href="#" class="btn nav__link nav__link--button">
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
