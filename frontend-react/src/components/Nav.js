import React, { useState } from "react";

function Nav() {
  return (
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
            login
          </a>
        </li>
        <li class="nav__item">
          <a href="#" class="nav__link nav__link--button">
            register
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
