import React, { useState } from "react";
import "./login.css";
import Input from "../input/Input";
import Button from "../button/Button";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const submitform = () => {
    console.log(username, password);
    setUsername("");
    setPassword("");
  };
  return (
    <>
      <div className="login">
        <Input
          placeholder="Username"
          type="text"
          borderRadius="5px"
          value={username}
          change={(event) => setUsername(event.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          change={(event) => setPassword(event.target.value)}
        />
        <Button
          onClick={submitform}
          name="SUBMIT"
          color="#fff"
          backgroundColor="#000"
          padding="12px 18px"
          textTransform="uppercase"
          borderRadius="3px"
        />
      </div>
    </>
  );
};

export default Login;
