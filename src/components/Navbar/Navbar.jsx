import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const [user, setUser] = useState("user");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/2"
        );

        if (!response.ok) throw new Error("Something went wrong");
        const data = await response.json();

        console.log(data);

        setUser(data.username);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

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
      </ul>
      {loading ? <h1 className="loading">Loading</h1> : <h1>{user}</h1>}
    </nav>
  );
}
export default Navbar;
