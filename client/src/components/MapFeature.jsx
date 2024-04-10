import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom"; // keeping it here in case this is needed

// Attempt 1 below
// Features: Map showing NYC over UES and UWS, working markers with popup feature.

// Importing various things we will need for our map
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

// // Below I created an array of locations to test the marker/popup functionality but it would be better to fetch directly from the API.
// const markers = [
//   {
//     geocode: [40.774929, -73.957207],
//     popup: "Masseria, 1404 3rd Ave New York NY",
//   },
//   {
//     geocode: [42.72911, -73.70171],
//     popup: "The Red Grill, 1701 2nd Ave New York NY",
//   },
//   {
//     geocode: [42.72541, -73.70244],
//     popup: "Mission Ceviche, 1400 2nd Ave New York NY",
//   },
//   {
//     geocode: [40.7613, -73.96111],
//     popup: "Sea Salt NYC, 1123 1st Ave New York NY",
//   },
//   {
//     geocode: [40.77545, -73.96306],
//     popup: "Sant Ambroeus, 1000 Madison Ave New York NY",
//   },
//   {
//     geocode: [40.78561, -73.97259],
//     popup: "The Viand, 517 Columbus Ave New York NY",
//   },
//   {
//     geocode: [40.779339, -73.977623],
//     popup: "Pappardella, 316 Columbus Ave New York NY",
//   },
//   {
//     geocode: [40.787018, -73.977971],
//     popup: "Maison Pickle, 2315 Broadway Ave New York NY ",
//   },
//   {
//     geocode: [40.77697, -73.979332],
//     popup: "Felice 71, 240 Columbus Ave New York NY",
//   },
// ];

// // Attempt 1 to fetch the Restaurant locations from the internal API
// const [restaurantLocations, setRestaurantLocations] = useState([]);

// useEffect(()=> {
//   const fetchRestaurantLocations = async () => {
//     try {
//       const response = await fetch(`/api/establishments/${id}`)
//     }
//   }
// });

const MapFeature = () => {
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

        {/*Below code is for the 'markers' array of objects */}
        {/* {markers.map((marker) => (
          <Marker position={marker.geocode}>
            <Popup>
              <h4>{marker.popup}</h4>
            </Popup>
          </Marker>
        ))} */}
      </MapContainer>
    </>
  );
};
export default MapFeature;
