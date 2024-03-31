import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Restaurants from "./components/Restaurants";
import RestaurantPage from "./components/RestaurantPage";
import Navbar from "./components/Navbar";
import RestaurantMeals from "./components/RestaurantMeals";
import UES from "./components/UES";
import UWS from "./components/UWS";
import AboutUs from "./components/AboutUs";
import JoinUs from "./components/JoinUs";
// importing my map feature component
import MapFeature from "./components/MapFeature";

function App() {
  //state to store establishments data
  const [establishment, setEstablishment] = useState([]);
  const location = useLocation(); // hook the current location

  //fetch establishments data
  useEffect(() => {
    fetchData();
  }, []);

  //function to fetch establishments data
  const fetchData = async () => {
    await fetchEstablishment();
  };

  const fetchEstablishment = async () => {
    try {
      const response = await fetch("/api/establishment");
      const data = await response.json();
      console.log("Establishment data:", data);
      setEstablishment(data);
    } catch (error) {
      console.error("Error fetching establishment:", error);
    }
  };

  return (
    <div className="App">
      <h1 className={location.pathname === "/" ? "home-heading" : ""}>
        SHELTER MEAL
      </h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/UES" element={<UES />} />
        <Route path="/UWS" element={<UWS />} />
        <Route
          path="/restaurants"
          element={<Restaurants establishment={establishment} />}
        />
        <Route path="/restaurant/:id" element={<RestaurantPage />} />
        <Route path="/restaurant/:id/meals" element={<RestaurantMeals />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/join-us" element={<JoinUs />} />
        {/* adding my map feature route path */}
        <Route path="/map-feature" element={<MapFeature />} />
      </Routes>
    </div>
  );
}

export default App;
