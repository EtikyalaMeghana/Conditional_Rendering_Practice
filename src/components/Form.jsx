import React from "react";
import Input from "./Input";

function Form(props) {
  return (
    <form className="form">
      <Input type="text" ph="Username" />
      <Input type="password" ph="Password" />
      {props.user === false && <Input type="password" ph="Confirm Password" />}
      <button type="submit">{props.user ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
