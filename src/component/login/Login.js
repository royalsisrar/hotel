import React from "react";
import "./login.css";
import Input from "../input/Input";

const Login = () => {
  return (
    <>
      <div className="login">
        <Input placeholder="Username" type="text" borderRadius="5px" />
        <Input placeholder="Password" type="password" />
      </div>
    </>
  );
};

export default Login;
