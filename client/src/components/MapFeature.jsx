import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom"; // keeping it here in case this is needed

// Attempt 1 below
// Features: Map showing NYC over UES and UWS, functional markers with popup feature.

// Importing various things we will need for our map
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

const MapFeature = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [shelterData, setShelterData] = useState([]);

  useEffect(() => {
    fetch("/api/establishment")
      .then((response) => response.json())
      .then((data) => {
        setRestaurantData(data);
      })
      .catch((error) =>
        console.error("Error fetching restaurant data:", error)
      );
  }, []);

  useEffect(() => {
    fetch("/api/shelters")
      .then((response) => response.json())
      .then((data) => {
        setShelterData(data);
      })
      .catch((error) => console.error("Error fetching shelter data:", error));
  }, []);

  const restaurantIcon = new Icon({
    iconUrl:
      "https://em-content.zobj.net/source/google/387/pot-of-food_1f372.png",
    iconSize: [40, 45],
  });

  const shelterIcon = new Icon({
    iconUrl:
      "https://em-content.zobj.net/source/microsoft/379/pink-heart_1fa77.png",
    iconSize: [35, 35],
  });

  return (
    <>
      <div className="map-about">
        <h3>
          Welcome! Here, you can find participating Restaurants (🍴) and
          Shelters(💗) in your area to build connections with your community.
        </h3>
      </div>
      <MapContainer
        center={[40.7736, -73.9566]}
        zoom={14}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {/*Mapping through the restaurants to create markers */}
        {restaurantData.map((restaurant, index) => (
          <Marker
            key={index}
            position={[restaurant.latitude, restaurant.longitude]}
            icon={restaurantIcon}
          >
            <Popup>
              <div>
                <h3>{restaurant.name}</h3>
                <h5>{restaurant.address}</h5>
              </div>
            </Popup>
          </Marker>
        ))}
        {/* Mapping through the shelters to create markers */}
        {shelterData.map((shelter, index) => (
          <Marker
            key={index}
            position={[shelter.latitude, shelter.longitude]}
            icon={shelterIcon}
          >
            <Popup>
              <div>
                <h3>{shelter.name}</h3>
                <h5>{shelter.address}</h5>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};
export default MapFeature;
