import React from "react";
import { Link } from "react-router-dom";
import Banner from "../component/banner/Banner.js";
import Button from "../component/button/Button.js";
import Card from "../component/card/Card.js";
import Footer from "../component/footer/Footer.js";
import Header from "../component/header/Header.js";
import Images from "../images/hotel4.jpg";

const Home = () => {
  return (
    <>
      <Header />
      <Banner
        head="WLCOME TO HOUSE HOTEL"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quisquam, necessitatibus ducimus! Architecto similique ad est
              pariatur, placeat veniam ab. Laborum natus cupiditate, adipisci
              accusantium enim impedit possimus rerum aliquid ipsum!"
        backgroundImage={Images}
        backgroundPosition="center"
      />
      <div className="cards">
        <Card
          para="new product"
          tittle="Hotel"
          img="https://picsum.photos/205/300"
          btn="search"
        />
        <Card
          para="new product"
          tittle="Hotel"
          img="https://picsum.photos/201/300"
          btn="search"
        />
        <Card
          para="new product"
          tittle="Hotel"
          img="https://picsum.photos/202/300"
          btn="search"
        />
        <Card
          para="new product"
          tittle="Hotel"
          img="https://picsum.photos/255/300"
          btn="search"
        />
        <Card
          para="new product"
          tittle="Hotel"
          img="https://picsum.photos/241/300"
          btn="search"
        />
        <Card
          para="new product"
          tittle="Hotel"
          img="https://picsum.photos/252/300"
          btn="search"
        />
      </div>
      <Link to="/hotel">
        <div className="home-btn">
          <Button
            name="Seach More Hotel"
            color="#fff"
            backgroundColor="#000"
            padding="15px 14px"
            textTransform="uppercase"
            borderRadius="3px"
          />
        </div>
      </Link>
      <br></br>
      <Footer />
    </>
  );
};

export default Home;
