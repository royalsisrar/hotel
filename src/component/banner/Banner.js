import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import "./banner.css";

const Banner = (props) => {
  return (
    <>
      <div
        className="banner"
        style={{
          backgroundImage: `url(${props.backgroundImage})`,
          backgroundSize: `${props.backgroundSize}`,
          backgroundPosition: `${props.backgroundPosition}`,
        }}
      >
        <div className="content">
          <div className="banner-content">
            <h1>{props.head}</h1>
            <p>{props.paragraph}</p>
            <Link to="/contact">
              <Button
                name="BOOK NOW"
                fontWeight="900"
                padding="14px 35px"
                borderRadius="5px"
                border="none"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
