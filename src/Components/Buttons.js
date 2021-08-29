import React, { useEffect, useState } from "react";
import "./tailwind.css";

const Button = ({ text, preset, colorOn, colorOff, filter, setFilter }) => {
  const [active, setActive] = useState(preset || false);

  useEffect(() => {
    // toggle the existing button
    const key = text.replace(/\s+/g, "").toLowerCase();
    let temp = filter;
    temp[key] = active;
    setFilter(temp);
  });

  return (
    <button
      onClick={() => {
        setActive(!active);
      }}
      className={`text-sm px-2 sm:px-4 lg:px-6 h-12 lg:h-8 rounded-lg duration-200 ${
        active ? colorOn : colorOff
      } text-white hover:shadow-lg`}
    >
      {text}
    </button>
  );
};

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="flex-col justify-center mx-auto max-w-7xl my-3 px-3 mb-0 space-x-3">
      <div className="mb-2 flex justify-center space-x-1 sm:space-x-3">
        <Button
          text="Detroit"
          preset={true}
          colorOn="bg-gray-800"
          colorOff="bg-gray-300"
          filter={filter}
          setFilter={setFilter}
        />
        <Button
          text="Grosse Point"
          preset={true}
          colorOn="bg-gray-800"
          colorOff="bg-gray-300"
          filter={filter}
          setFilter={setFilter}
        />
        <Button
          text="Hamtramck"
          preset={true}
          colorOn="bg-gray-800"
          colorOff="bg-gray-300"
          filter={filter}
          setFilter={setFilter}
        />
        <Button
          text="Hamtramck Woods"
          preset={true}
          colorOn="bg-gray-800"
          colorOff="bg-gray-300"
          filter={filter}
          setFilter={setFilter}
        />
        <Button
          text="Highland Park"
          preset={true}
          colorOn="bg-gray-800"
          colorOff="bg-gray-300"
          filter={filter}
          setFilter={setFilter}
        />
      </div>
      <div className="mx-auto flex justify-center space-x-3">
        <Button
          text="In Person"
          preset={true}
          colorOn="bg-blue-600"
          colorOff="bg-gray-300"
          filter={filter}
          setFilter={setFilter}
        />
        <Button
          text="Virtual"
          preset={true}
          colorOn="bg-blue-600"
          colorOff="bg-gray-300"
          filter={filter}
          setFilter={setFilter}
        />
        <Button
          text="Block Club"
          preset={true}
          colorOn="bg-blue-600"
          colorOff="bg-gray-300"
          filter={filter}
          setFilter={setFilter}
        />
        <Button
          text="Resources"
          preset={true}
          colorOn="bg-blue-600"
          colorOff="bg-gray-300"
          filter={filter}
          setFilter={setFilter}
        />
      </div>
    </div>
  );
};

export default Filter;
