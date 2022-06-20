import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Nav from "./Nav";

const Admin = () => {
  const [types, setTypes] = useState([]);
  const Navigate = useNavigate();
  return (
    <div>
      <Nav />
      <div className="container">
        <button className="admin-btn">Add Question</button>
      </div>
    </div>
  );
};

export default Admin;
