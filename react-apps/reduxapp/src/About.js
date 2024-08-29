import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import { useState } from "react";
import "./App.css";

const About = () => {
  const counterVal = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const add = () => {
    dispatch({ type: "add" });
  };

  const sub = () => {
    dispatch({ type: "sub" });
  };
  const myDetails = useSelector((state) => state.myDetails);
  const [status, setStatus] = useState(true);
  return (
    <div>
      <Header />
      {status ? <p className="red">This is paragraph</p> : null}
      <h1>{counterVal}</h1>
      <br />
      <h1>{myDetails.name}</h1>
      <h1>{myDetails.email}</h1>
      <input type="button" value="Add" onClick={add} />
      <input type="button" value="Sub" onClick={sub} />
    </div>
  );
};

export default About;