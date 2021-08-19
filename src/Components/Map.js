import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";
import "./tailwind.css";

const Map = ({ data }) => {
  return (
    <div>
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
        {data.map((place) => {
          return (
            <Marker key={place.id} position={[place.lat, place.lng]}>
              <Popup closeOnClick={true}>
                <div className="">
                  <p className="font-medium text-lg my-0">{place.name}</p>
                  <p>{place.address}</p>
                  <p>
                    {place.date} @ {place.time}
                  </p>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default Map;
