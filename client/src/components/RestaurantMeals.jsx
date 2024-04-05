import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function RestaurantMeals() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [acceptedByShelter, setAcceptedByShelter] = useState(false);
  const [shelterName, setShelterName] = useState("");
  const [restaurantName, setRestaurantName] = useState("");

  // Fetch meals associated with the restaurant and restaurant details
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(`/api/restaurant/${id}/meals`);
        if (!response.ok) {
          throw new Error("Failed to fetch meals");
        }
        const data = await response.json();
        setMeals(data.data); // update meals state with fetched data
        setLoading(false); // update loading state to false
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };

    const fetchRestaurant = async () => {
      try {
        const response = await fetch(`/api/restaurant/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch restaurant details");
        }
        const data = await response.json();
        setRestaurantName(data.name); //update restaurant name state with fetched data
      } catch (error) {
        console.error("Error fetching restaurant details:", error);
      }
    };

    fetchMeals();
    fetchRestaurant();
  }, [id]); // ensure array dependencies to run when id changes

  // function to handle accepting food from shelter
  const handleAcceptFood = async () => {
    try {
      const response = await fetch("/api/postmeal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          restaurant_id: id,
          shelter_name: shelterName,
          description: "Food has been accepted by shelter",
          is_taken: true,
          time_frame: "9:00pm - 10:30pm",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to accept food by shelter");
      }
      setAcceptedByShelter(true); //update state to indicate food is accpeted
    } catch (error) {
      console.error("Error accepting food by shelter:", error);
    }
  };

  // function to set shelter name from meals
  const setShelterNameFromMeals = () => {
    if (meals.length > 0) {
      setShelterName(meals[0].shelter_name);
    }
  };

  useEffect(() => {
    setShelterNameFromMeals(); //call function to set shelter name when meals state changes
  }, [meals]);

  // function to handle navigation back
  const handleGoBack = () => {
    navigate(-1);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  //if no meals available for restaurant, show message
  if (meals.length === 0) {
    return <div>No meals available for this restaurant</div>;
  }

  return (
    <div className="restaurant-meals-container">
      <h2>Restaurant Meals {restaurantName}</h2>
      <div className="restaurant-meals-content">
        {!acceptedByShelter && (
          <div>
            <ul>
              {meals.map((meal) => (
                <li key={meal.id}>
                  <p>{meal.description}</p>
                  <p>Time Frame: {meal.time_frame}</p>
                </li>
              ))}
            </ul>
            <button onClick={handleAcceptFood}>Submit</button>
          </div>
        )}
        {acceptedByShelter && (
          <div>
            <p>Food has been accepted by {shelterName}</p>
            <button onClick={handleGoBack}>Go Back</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default RestaurantMeals;
