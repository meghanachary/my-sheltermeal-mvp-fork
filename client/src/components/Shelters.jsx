import React from "react";
import { Link } from "react-router-dom";

const Shelters = () => {
  return (
    <div className="shelter-container">
      <h2>Shelters</h2>
      <ul>
        <li>
          <Link to="/uesShelters" className="shelter-link">
            Upper East Side
          </Link>
          <Link to="/uwsShelters" className="shelter-link">
            Upper West Side
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Shelters;
