import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/Coke">
        Eat
      </NavLink>
      <NavLink exact to="/Water">
        Drink
      </NavLink>
    </nav>
  );
}

export default NavBar;
