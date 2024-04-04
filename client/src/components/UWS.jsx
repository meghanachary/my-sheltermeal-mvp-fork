import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UWS = () => {
  const [restaurants, setRestaurants] = useState([]); // state to store the list of restaurants in Upper West side
  const [showBackButton, setShowBackButton] = useState(false);

  useEffect(() => {
    const fetchRestaurants = async () => {
      //function to fetch restaurants in Upper West Side
      try {
        const area = encodeURIComponent("Upper West Side"); //encode Upper West side for URl
        const response = await fetch(`/api/restaurants?area=${area}`); //fetch restaurants in Upper West side
        const data = await response.json();
        setRestaurants(data); //update state with fetched restaurants
      } catch (error) {
        console.error("Error fetching Upper East Side restaurants:", error);
      }
    };

    fetchRestaurants();
  }, []);

  useEffect(() => {
    if (restaurants.length > 1) {
      setShowBackButton(true);
    } else {
      setShowBackButton(false);
    }
  }, [restaurants]); //run this effect when restaurants state changes

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="uws-container">
      <h2>UPPER WEST SIDE</h2>
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
      {showBackButton && <button onClick={handleBack}>Back</button>}
    </div>
  );
};

export default UWS;
