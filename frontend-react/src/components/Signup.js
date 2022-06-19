import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import "../App.css";
import Nav from "./Nav";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const Navigation = useNavigate();
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
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
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
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <label for="password">Confirm Password</label>
        </div>
        <button
          type="submit"
          class="btn btn-ghost"
          onClick={function onSubmit(e) {
            e.preventDefault();

            let data = new FormData();

            data.append("name", name);
            data.append("email", email);
            data.append("password", password);
            data.append("password_confirmation", confirmPassword);

            axios({
              method: "post",
              url: "http://127.0.0.1:8000/api/v1/auth/register",
              data: data,
            })
              .then(function (response) {
                const token = response.data.access_token;
                localStorage.setItem("token", token);
                Navigation("/example"); // test nav after successful login
              })
              .catch(function (e) {
                const data = e.response.data;
                let msg = "";

                //  Iterate through the object keys and values
                for (const key in data) {
                  msg += `${key}: ${data[key]}\n`;
                }
                console.log(msg);
              });
          }}
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
