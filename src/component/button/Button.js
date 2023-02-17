import React from "react";
import "./button.css";

const Button = (props) => {
  return (
    <>
      <button
        style={{
          color: `${props.color}`,
          backgroundColor: `${props.backgroundColor}`,
          fontWeight: `${props.fontWeight}`,
          padding: `${props.padding}`,
          borderRadius: `${props.borderRadius}`,
          textTransform: `${props.textTransform}`,
          border: `${props.border}`,
          fontSize: `${props.fontSize}`,
        }}
      >
        {props.name}
      </button>
    </>
  );
};

export default Button;
