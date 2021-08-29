import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";
import "./tailwind.css";

let markersRefs = [];

const Map = ({ data, currSelected }) => {
  useEffect(() => {
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
              <div className="">
                <p className="font-medium text-lg my-0">
                  {place.organizationName}
                </p>
                <p>{place.address}</p>
                <p>
                  {place.startDate} {place.endDate && `- ${place.endDate}`}
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
