import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import "../App.css";
import Nav from "./Nav";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigation = useNavigate();
  return (
    <div>
      <Nav />
      <form action="#" class="container login-form">
        <h1>Login</h1>
        <div class="form-input-material">
          <input
            type="text"
            name="email"
            id="email"
            placeholder=" "
            autocomplete="off"
            required
            class="form-control-material"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label for="password">Password</label>
        </div>
        <button
          type="submit"
          class="btn btn-ghost"
          onClick={function onSubmit(e) {
            e.preventDefault();
            let data = new FormData();
            data.append("email", email);
            data.append("password", password);
            axios({
              method: "post",
              url: "http://127.0.0.1:8000/api/v1/auth/login",
              data: data,
            })
              .then(function (response) {
                const token = response.data.access_token;
                localStorage.setItem("token", token);
                Navigation("/signup"); // test nav after successful login
              })
              .catch(function (e) {
                const data = e.response.data;
                let msg = "";

                //  Iterate through the object keys and values
                for (const key in data) {
                  msg += `${key}: ${data[key]}\n`;
                }

                alert(msg);
              });
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
