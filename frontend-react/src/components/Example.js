import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "../App.css";
import Nav from "./Nav";

const Example = () => {
  return (
    <div>
      <Nav />
      <h1 style={{ color: "red" }}>Route Test</h1>
      <p style={{ textAlign: "center" }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum,
        nesciunt.
      </p>
    </div>
  );
};
export default Example;
