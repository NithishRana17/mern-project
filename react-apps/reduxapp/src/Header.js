import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink to="/home">Home </NavLink>
      <NavLink to="/contact">Contact </NavLink>
      <NavLink to="/about">About </NavLink>
      <NavLink to="/web">Web Page </NavLink>
    </div>
  );
};

export default Header;