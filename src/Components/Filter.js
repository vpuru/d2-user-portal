import React, { useState } from "react";
import "./tailwind.css";

const CityButton = ({ text, preset }) => {
  const [active, setActive] = useState(preset || false);

  return active ? (
    <button
      onClick={() => setActive(!active)}
      className="px-4 lg:px-6 h-14 rounded-lg duration-200 bg-gray-800 text-white hover:bg-gray-700"
    >
      {text}
    </button>
  ) : (
    <button
      onClick={() => setActive(!active)}
      className="px-4 lg:px-6 h-14 rounded-lg duration-200 bg-gray-400 text-white hover:bg-gray-500"
    >
      {text}
    </button>
  );
};

const CovidButton = ({ text, preset }) => {
  const [active, setActive] = useState(preset || false);

  return active ? (
    <button
      onClick={() => setActive(!active)}
      className="px-4 lg:px-6 h-14 rounded-lg duration-200 bg-blue-600 text-white hover:opacity-80"
    >
      {text}
    </button>
  ) : (
    <button
      onClick={() => setActive(!active)}
      className="px-4 lg:px-6 h-14 rounded-lg duration-200 bg-blue-300 text-white hover:opacity-90"
    >
      {text}
    </button>
  );
};

const ResourceButton = ({ text, preset }) => {
  const [active, setActive] = useState(preset || false);

  return active ? (
    <button
      onClick={() => setActive(!active)}
      className="px-4 lg:px-6 h-14 rounded-lg duration-200 bg-purple-600 text-white hover:opacity-90"
    >
      {text}
    </button>
  ) : (
    <button
      onClick={() => setActive(!active)}
      className="px-4 lg:px-6 h-14 rounded-lg duration-200 bg-purple-400 text-white hover:opacity-90"
    >
      {text}
    </button>
  );
};

const Filter = () => {
  return (
    <div className="flex items-center justify-between mx-auto my-3 px-3 mb-0 max-w-7xl h-20 space-x-3">
      <CityButton text="Detroit" preset={true} />
      <CityButton text="Grosse Point" />
      <CityButton text="Hamtrack" />
      <CityButton text="Harper Woods" />
      <CityButton text="Highland Park" />
      <CovidButton text="In-Person" preset={true} />
      <CovidButton text="Virtual" />
      <ResourceButton text="Block Club" preset={true} />
      <ResourceButton text="Resource" />
    </div>
  );
};

export default Filter;
