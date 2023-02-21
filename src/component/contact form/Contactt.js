import React, { useState } from "react";
import Button from "../button/Button";
import Footer from "../footer/Footer";
import Input from "../input/Input";

const Contactt = () => {
  const [name, setName] = useState();
  const [lastname, setlastName] = useState();
  const [hotelname, setHotelName] = useState();
  const [address, setAddress] = useState();
  const [number, setNumber] = useState();

  const submitform = () => {
    console.log(name, lastname, hotelname, address, number);
    setName("");
    setlastName("");
    setHotelName("");
    setAddress("");
    setNumber("");
  };

  return (
    <>
      <div className="logindiv">
        <div className="form">
          <h2 style={{ color: "#fff" }}>BOOK NOW</h2>
          <Input
            type="text"
            placeholder=" first name"
            value={name}
            change={(event) => setName(event.target.value)}
          />
          <Input
            type="text"
            placeholder="last name"
            value={lastname}
            change={(event) => setlastName(event.target.value)}
          />
          <Input
            type="text"
            placeholder="hotel name"
            value={hotelname}
            change={(event) => setHotelName(event.target.value)}
          />
          <Input
            type="text"
            placeholder="address"
            value={address}
            change={(event) => setAddress(event.target.value)}
          />
          <Input
            type="number"
            placeholder="number"
            value={number}
            change={(event) => setNumber(event.target.value)}
          />
          <Button name="submit" onClick={submitform} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contactt;
