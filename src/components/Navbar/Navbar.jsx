import React from "react";
import { NavLink } from "react-router-dom";
// import User from "../User/User";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="nav-container">
      <h1>My shop</h1>

      <ul>
        <li>
          <NavLink to="/"> All items</NavLink>
        </li>
        <li>
          <NavLink to="/my-card">My Cart</NavLink>
        </li>
        <li>
          <NavLink to="/Favorite"> Favorite</NavLink>{" "}
        </li>
        <NavLink to="/Admin"> Admin</NavLink>{" "}
      </ul>
    </nav>
  );
}
export default Navbar;
