import React, { useState } from "react";
// import { Link } from "react-router-dom"; // keeping it here in case this is needed

// Importing various things we will need for our map
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

const MapFeature = () => {
  return (
    <>
      <div className="map-about">
        <h3>
          Welcome! Here you can find Restaurants (🍴)or Shelters(💗) in your
          area to build connections with your community.
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
      </MapContainer>
    </>
  );
};
export default MapFeature;
