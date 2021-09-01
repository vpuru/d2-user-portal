import React, { useEffect, useState } from "react";
import Dashboard from "./Card";
import Map from "./Map";
import Buttons from "./Buttons";
import "./Map.css";
import "./tailwind.css";

const Interface = ({ masterData }) => {
  const [currSelected, setCurrSelected] = useState();
  const [data, setData] = useState(masterData);
  const [filter, setFilter] = useState({});

  useEffect(() => {
    console.log("Interface effect");
    setData(() => masterData);
  });

  const updateFilter = () => {
    setData(
      masterData.filter((item) => {
        const myarr = item.eventType.toLowerCase().split(", ");
        for (let i = 0; i < myarr.length; i++) {
          if (!filter[myarr[i]]) {
            return false;
          }
        }

        return filter[item.eventCity.toLowerCase()];
      })
    );
  };

  return (
    <div>
      <Buttons
        filter={filter}
        setFilter={setFilter}
        updateFilter={updateFilter}
      />

      <div className="text-center align-middle"></div>
      <div className="mt-5 pb-4 lg:grid lg:grid-cols-3 gap-2 lg:mx-auto max-w-7xl px-4 h-auto">
        <div className="lg:col-span-2">
          <Map
            data={data.filter((item) => {
              const myarr = item.eventType.toLowerCase().split(", ");

              for (let i = 0; i < myarr.length; i++) {
                if (!filter[myarr[i]]) {
                  return false;
                }
              }

              return filter[item.eventCity.toLowerCase()];
            })}
            currSelected={currSelected}
          />
        </div>
        <div>
          <Dashboard
            data={data.filter((item) => {
              const myarr = item.eventType.toLowerCase().split(", ");

              for (let i = 0; i < myarr.length; i++) {
                if (!filter[myarr[i]]) {
                  return false;
                }
              }

              return filter[item.eventCity.toLowerCase()];
            })}
            setCurrSelected={setCurrSelected}
          />
        </div>
      </div>
    </div>
  );
};

export default Interface;
