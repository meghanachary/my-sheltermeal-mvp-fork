import React from "react";
import { Link } from "react-router-dom";

const Shelters = () => {
  return (
    <div className="shelter-container">
      <h2>Shelters</h2>
      <ul>
        <li>
          <Link to="/UesShelters" className="shelter-link">
            UES
          </Link>
          <Link to="/UwsShelters" className="shelter-link">
            UWS
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Shelters;
