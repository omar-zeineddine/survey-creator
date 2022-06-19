import React, { useState } from "react";

function LoginForm() {
  return (
    <div className="container">
      <form className="myform">
        <h5>Log In</h5>

        <label>Name:</label>
        <input placeholder="Enter Name" />
        <label>Password:</label>
        <input placeholder="Enter Password" />
        <button className="btn">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
