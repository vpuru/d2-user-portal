import React, { useEffect, useState } from "react";
import marker from "./marker.svg";
import "./Card.css";
import "./tailwind.css";

const moment = require("moment");

const Card = ({ data, setCurrSelected }) => {
  useEffect(() => {
    console.log(data.length);
  });

  return (
    <div className="mt-3 lg:mt-0 card-container overflow-y-auto space-y-2 border">
      {/* Individual Cards */}
      {console.log(data.length)}
      {!data.length && (
        <div className="w-full h-14 text-center p-4 rounded-lg bg-red-300">
          No results found!
        </div>
      )}
      {data.map((place, count) => {
        return (
          <div
            key={count}
            className="w-full rounded-lg bg-white flex items-center p-2 border border-black duration-200 hover:shadow-md  hover:border-blue-500 "
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setCurrSelected(count);
            }}
          >
            <div>
              <p className="font-bold">{place.eventName || "No event name"}</p>
              <div className="flex-col items-center space-x-1">
                <div className="flex">
                  <img
                    src={marker}
                    alt="marker"
                    className="h-4 w-4 mt-1 mx-1"
                  />
                  {place.address}
                </div>
                <div className={"flex"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 m-0 mt-1 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p>
                    {moment(place.startDate).format("MM/DD")}
                    {" - "}
                    {moment(place.endDate).format("MM/DD")}
                    {" | "}
                    {moment(place.startDate).format("LT")}
                    {" to "}
                    {moment(place.endDate).format("LT")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
