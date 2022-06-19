import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import "../App.css";
import Nav from "./Nav";

const Login = () => {
  return (
    <div>
      <Nav />
      <form action="#" class="container login-form">
        <h1>Register</h1>
        <div class="form-input-material">
          <input
            type="text"
            name="name"
            id="name"
            placeholder=" "
            autocomplete="off"
            required
            class="form-control-material"
          />
          <label for="email">Name</label>
        </div>
        <div class="form-input-material">
          <input
            type="email"
            name="email"
            id="email"
            placeholder=" "
            autocomplete="off"
            required
            class="form-control-material"
          />
          <label for="email">Email</label>
        </div>
        <div class="form-input-material">
          <input
            type="password"
            name="password"
            id="password"
            placeholder=" "
            autocomplete="off"
            required
            class="form-control-material"
          />
          <label for="password">Password</label>
        </div>
        <div class="form-input-material">
          <input
            type="password"
            name="password"
            placeholder=" "
            autocomplete="off"
            required
            class="form-control-material"
          />
          <label for="password">Confirm Password</label>
        </div>
        <button type="submit" class="btn btn-ghost">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Login;
