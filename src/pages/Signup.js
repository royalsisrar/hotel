import React, { useState } from "react";
import Button from "../component/button/Button";
import Header from "../component/header/Header";
import Input from "../component/input/Input";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();

  const submit = () => {
    console.log(name, email, number);
    setName("");
    setEmail("");
    setNumber("");
  };

  return (
    <>
      <Header type="text" placeholder="First Name" />
      <div className="logindiv">
        <div className="form">
          <Input
            type="text"
            placeholder="name"
            value={name}
            change={(event) => setName(event.target.value)}
          />
          <Input
            type="email"
            placeholder="email"
            value={email}
            change={(event) => setEmail(event.target.value)}
          />
          <Input
            type="number"
            placeholder="number"
            value={number}
            change={(event) => setNumber(event.target.value)}
          />
          <Button name="SignUp" onClick={submit} />
        </div>
      </div>
    </>
  );
};

export default Signup;
