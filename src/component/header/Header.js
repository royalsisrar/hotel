import React from "react";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img alt="logo" title="logo" src={Logo} />
          </Link>
        </div>
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/hotel">Hotels</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="header-btn">
          <Link to="/loginpage">
            <Button
              name="Login"
              color="#fff"
              backgroundColor="#000"
              padding="10px 16px"
              textTransform="uppercase"
              fontSize="14px"
              borderRadius="3px"
            />
          </Link>
          <Link to="/signup">
            <Button
              name="Signup"
              color="#fff"
              backgroundColor="#000"
              padding="10px 16px"
              textTransform="uppercase"
              fontSize="14px"
              borderRadius="3px"
            />
          </Link>
        </div>
      </div>
     
    </>
  );
};

export default Header;
