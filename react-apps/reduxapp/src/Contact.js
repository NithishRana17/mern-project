import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";

const Contact = () => {
  const counterVal = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const add = () => {
    dispatch({ type: "add" });
  };

  const sub = () => {
    dispatch({ type: "sub" });
  };

  return (
    <div>
      <Header />
      <h1>{counterVal}</h1>
      <br />
      <input type="button" value="Add" onClick={add} />
      <input type="button" value="Sub" onClick={sub} />
    </div>
  );
};

export default Contact;