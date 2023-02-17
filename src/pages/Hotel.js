import React from "react";
import Card from "../component/card/Card";
import Header from "../component/header/Header";

const Hotel = () => {
  return (
    <>
      <Header />
      <div className="cards">
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Hotel;
