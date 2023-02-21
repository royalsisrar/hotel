import React from "react";
import "./input.css";

const Input = (props) => {
  return (
    <>
      <input
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        onChange={props.change}
      ></input>
    </>
  );
};

export default Input;
