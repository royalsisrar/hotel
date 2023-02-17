import React from "react";
import "./input.css"

const Input = (props) => {
  return (
    <>
      <input
        placeholder={props.placeholder}
        type={props.type}
      ></input>
    </>
  );
};

export default Input;
