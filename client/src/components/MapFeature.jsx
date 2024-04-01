import React, { useState } from "react";
// import { Link } from "react-router-dom"; // keeping it here in case this is needed

// Importing various things we will need for our map
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

const MapFeature = () => {
  return (
    <MapContainer center={[40.7128, -74.006]} zoom={16} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};
export default MapFeature;
