import { useState } from "react";
import Nav from "./Nav";

const Survey = () => {
  return (
    <>
      <Nav />
      <h1>Survey</h1>
      <div className="survey-form">
        <div className="create-survey">
          <select>
            <option value={"text"}>Text</option>
            <option value={"checkbox"}>Checkbox</option>
            <option value={"dropdown"}>DropDown</option>
            <option value={"radioButton"}>RadioButton</option>
            <option value={"date"}>Date</option>
            <option value={"time"}>Time</option>
          </select>
          <button className="btn-create" onClick={() => {}}>
            Add question
          </button>
          <br />
        </div>
      </div>
    </>
  );
};

export default Survey;
