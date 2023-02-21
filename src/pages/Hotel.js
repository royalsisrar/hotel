import React from "react";
import Card from "../component/card/Card";
import Footer from "../component/footer/Footer";
import Header from "../component/header/Header";

const Hotel = () => {
  return (
    <>
      <Header />
      <div className="cards">
        <Card
          para="new product"
          tittle="Hotel"
          img="https://picsum.photos/200/300"
          btn="search"
        />
        <Card
          para="new product"
          tittle="Hotel"
          img="https://picsum.photos/206/300"
          btn="search"
        />
        <Card
          para="new product"
          tittle="Hotel"
          img="https://picsum.photos/207/300"
          btn="search"
        />
        <Card
          para="new product"
          tittle="Hotel"
          img="https://picsum.photos/208/300"
          btn="search"
        />
        <Card
          para="new product"
          tittle="Hotel"
          img="https://picsum.photos/209/300"
          btn="search"
        />
        <Card
          para="new product"
          tittle="Hotel"
          img="https://picsum.photos/210/300"
          btn="search"
        />
        <Card
          para="new product"
          tittle="Hotel"
          img="https://picsum.photos/220/300"
          btn="search"
        />
        <Card
          para="new product"
          tittle="Hotel"
          img="https://picsum.photos/230/300"
          btn="search"
        />
        <Card
          para="new product"
          tittle="Hotel"
          img="https://picsum.photos/240/300"
          btn="search"
        />
        <Card
          para="new product"
          tittle="Hotel"
          img="https://picsum.photos/250/300"
          btn="search"
        />
        <Card
          para="new product"
          tittle="Hotel"
          img="https://picsum.photos/260/300"
          btn="search"
        />
        <Card
          para="new product"
          tittle="Hotel"
          img="https://picsum.photos/270/300"
          btn="search"
        />
      </div>
      <Footer />
    </>
  );
};

export default Hotel;
