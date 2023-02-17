import React from "react";
import Banner from "../component/banner/Banner";
import Header from "../component/header/Header";
import Images from "../images/hotel.jpg";

const About = () => {
  return (
    <>
      <Header />
      <Banner
        head="ABOUT HOUSE HOTEL"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quisquam, necessitatibus ducimus! Architecto similique ad est."
        backgroundImage={Images}
      />
    </>
  );
};

export default About;
