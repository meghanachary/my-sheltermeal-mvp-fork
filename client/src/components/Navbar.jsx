import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/restaurants">Restaurants</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/join-us">Join Us</Link>
          </li>
          <li>
            <Link to="/map-feature">Search the Map🔎</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
