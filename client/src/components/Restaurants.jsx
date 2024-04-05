import React from "react";
import { Link } from "react-router-dom";

const Restaurants = () => {
  return (
    <div className="restaurant-container">
      <h2>Restaurants</h2>
      <ul>
        <li>
          <Link to="/UES" className="restaurant-link">
            UES
          </Link>
        </li>
        <li>
          <Link to="/UWS" className="restaurant-link">
            UWS
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Restaurants;
