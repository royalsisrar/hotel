import React from "react";
import "./about.css";

const Aboutt = (props) => {
  return (
    <>
      <h2>{props.heading}</h2>
      <p className="pa">{props.paragraph}</p>
      <p className="pa">{props.para}</p>
    </>
  );
};

export default Aboutt;
