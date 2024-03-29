import React from "react";
import RestaurantMeals from "./RestaurantMeals";
import { useParams } from "react-router-dom";


function RestaurantPage() {
    const {id} = useParams();
  return (
    <div>
      <h2>Restaurant Page</h2> 
      <RestaurantMeals id ={id} />
    
    </div>
  );
}

export default RestaurantPage;
