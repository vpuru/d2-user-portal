import React from "react";
import marker from "./marker.svg";
import "./Card.css";
import "./tailwind.css";

const Card = ({ data }) => {
  return (
    <div className="card-container overflow-y-auto space-y-2 border">
      {/* Indiviaul Cards */}
      {data.map((place) => {
        return (
          <div className="w-full h-20 rounded-lg bg-white flex items-center p-2 border border-black duration-200 hover:shadow-md  hover:border-blue-500 ">
            <div>
              <p className="font-bold">{place.name}</p>
              <div className="flex items-center space-x-1">
                <img src={marker} className="h-4 w-4" />
                <p>{place.address}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
