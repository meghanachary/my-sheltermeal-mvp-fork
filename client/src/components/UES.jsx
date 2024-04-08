import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UES = () => {
  const [restaurants, setRestaurants] = useState([]); // state to store the list of restaurants in Upper East side
  const [showBackButton, setShowBackButton] = useState(false);
  // Initializing another state variable for the shelters below
  const [shelters, setShelters] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      //function to fetch restaurants in Upper East Side
      try {
        const area = encodeURIComponent("Upper East Side"); //encode Upper East side for URl
        const response = await fetch(`/api/restaurants?area=${area}`); //fetch restaurants in Upper East side
        const data = await response.json();
        setRestaurants(data); //update state with fetched restaurants
      } catch (error) {
        console.error("Error fetching Upper East Side restaurants:", error);
      }
    };

    fetchRestaurants();
  }, []);

  // // Creating another one for shelters
  // useEffect(() => {
  //   const fetchShelters = async () => {
  //     // fetch shelters in UES
  //     try {
  //       const area = encodeURIComponent("Upper East Side");
  //       const response = await fetch(`/api/shelters?area=${area}`);
  //       const data = await response.json();
  //       setShelters(data);
  //     } catch (error) {
  //       console.error("Error fetching Upper East Side shelters", error);
  //     }
  //   };

  //   fetchShelters();
  // }, []);

  useEffect(() => {
    if (restaurants.length > 1) {
      setShowBackButton(true);
    } else {
      setShowBackButton(false);
    }
  }, [restaurants]); //run this effect when restaurants state changes

  // // Same thing but for shelters
  // useEffect(() => {
  //   if (shelters.length > 1) {
  //     setShowBackButton(true);
  //   } else {
  //     setShowBackButton(false);
  //   }
  // }, [shelters]); //run this effect when restaurants state changes

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="ues-container">
      <h2>UPPER EAST SIDE</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            <Link
              to={`/restaurant/${restaurant.id}/meals`}
              className="restaurant-name"
            >
              {restaurant.name} - {restaurant.address}
            </Link>
          </li>
        ))}
      </ul>
      {/* Creating the same but for shelters, below
      <ul>
        {shelters.map((shelter) => (
          <li key={shelter.id}>
            <li>
              {shelter.name} {shelter.address}
            </li>
          </li>
        ))}
      </ul> */}
      {showBackButton && <button onClick={handleBack}>Back</button>}
    </div>
  );
};

export default UES;
