import React, { useEffect, useState } from "react";
import Dashboard from "./Card";
import Map from "./Map";
import "./tailwind.css";

const Interface = ({ masterData, filter }) => {
  const [currSelected, setCurrSelected] = useState();
  const [data, setData] = useState(masterData);

  useEffect(() => {
    setData(() => masterData);
  }, [masterData]);

  const updateFilter = () => {
    console.log("ok");
    setData(masterData.filter((item) => filter[item.eventCity.toLowerCase()]));
  };

  return (
    <div>
      <div className="text-center align-middle">
        <button
          className="my-2 text-sm px-4 lg:px-6 h-8 rounded-lg duration-200 bg-green-300 hover:bg-green-400"
          onClick={updateFilter}
        >
          Filter!
        </button>
      </div>
      <div className="mt-0 pb-4 lg:grid lg:grid-cols-3 gap-2 lg:mx-auto max-w-7xl px-4 h-auto">
        <div className="lg:col-span-2">
          <Map
            data={data.filter((item) => filter[item.eventCity.toLowerCase()])}
            currSelected={currSelected}
          />
        </div>
        <div>
          <Dashboard
            data={data.filter((item) => filter[item.eventCity.toLowerCase()])}
            setCurrSelected={setCurrSelected}
          />
        </div>
      </div>
    </div>
  );
};

export default Interface;
