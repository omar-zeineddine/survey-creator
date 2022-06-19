import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import "../App.css";
import Nav from "./Nav";

const Login = () => {
  return (
    <div>
      <Nav />
      <form action="javascript:void(0);" class="container login-form">
        <h1>Login</h1>
        <div class="form-input-material">
          <input
            type="text"
            name="username"
            id="username"
            placeholder=" "
            autocomplete="off"
            required
            class="form-control-material"
          />
          <label for="username">Username</label>
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
        <button type="submit" class="btn btn-ghost">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
