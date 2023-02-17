import React from "react";
import "./card.css";
import Hotel from "../../images/hotel.jpg";
import Hotel1 from "../../images/hotel1.jpg";
import Hotel2 from "../../images/hotel2.jpg";
import Hotel3 from "../../images/hotel3.jpg";

const Card = () => {
  const details = [
    {
      image: Hotel,
      heading: "RADISSON",
      paragraph: "Lorem Ipsum Dolar Sim Amet",
    },
    {
      image: Hotel1,
      heading: "GREEN PALMS",
      paragraph: "Lorem Ipsum Dolar Sim Amet",
    },
    {
      image: Hotel2,
      heading: "HOTEL RED",
      paragraph: "Lorem Ipsum Dolar Sim Amet",
    },
    {
      image: Hotel3,
      heading: "GRAND PALACE",
      paragraph: "Lorem Ipsum Dolar Sim Amet",
    },
  ];

  return (
    <>
      {details.map((details) => {
        return (
          <div className="cards">
            <div id="card">
              <img id="img" src={details.image} />
              <h3 id="title">{details.heading}</h3>
              <p id="desc" align="center">
                {details.paragraph}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
