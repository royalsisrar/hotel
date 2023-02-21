import React from "react";
import Button from "../component/button/Button";
import Header from "../component/header/Header";
import Login from "../component/login/Login";

const Loginpage = () => {
  return (
    <>
      <Header />
      <div className="logindiv">
        <div className="form">
          <Login />
        </div>
      </div>
    </>
  );
};

export default Loginpage;
