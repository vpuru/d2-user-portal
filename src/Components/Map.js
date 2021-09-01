import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";
import "./tailwind.css";

const moment = require("moment");

let markersRefs = [];

const Map = ({ data, currSelected }) => {
  useEffect(() => {
    console.log("Map effect");
    // change our currently selected item if valid
    markersRefs[currSelected] && markersRefs[currSelected].openPopup();
  }, [currSelected]);

  return (
    <MapContainer
      center={[42.41, -83.0458]}
      zoom={11}
      scrollWheelZoom={true}
      className="leaflet-container rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Place our markers */}
      {data.map((place, id) => {
        return (
          <Marker
            key={id}
            position={[place.positionLat, place.positionLong]}
            ref={(ref) => (markersRefs[id] = ref)}
          >
            <Popup closeOnClick={true}>
              <div>
                <div className="text-center">
                  <p className="text-lg my-0 font-bold">
                    {place.eventName || "No event name"}
                  </p>
                </div>
                <p>
                  <strong>Address:</strong> {place.address}
                </p>
                <p>
                  <strong>Date: </strong>
                  {moment(place.startDate).format("MM/DD/YYYY")}
                  {" - "}
                  {moment(place.endDate).format("MM/DD/YYYY")}
                </p>
                <p>
                  <strong>Time: </strong>
                  {moment(place.startDate).format("LT")}
                  {" to "}
                  {moment(place.endDate).format("LT")}
                </p>
                <p>
                  <strong>Organization Name:</strong> {place.organizationName}
                </p>
                <p>
                  <strong>Info: </strong>
                  {place.attendeeInfo}
                </p>
                <p>
                  <strong>Link: </strong> <a href={place.link}>{place.link}</a>
                </p>
                <p>
                  <strong>Address: </strong>
                  {place.address}
                </p>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
