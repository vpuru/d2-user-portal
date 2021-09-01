import React, { useEffect, useState } from "react";
import "./tailwind.css";

const Button = ({
  text,
  preset,
  colorOn,
  colorOff,
  filter,
  setFilter,
  updateFilter,
}) => {
  const [active, setActive] = useState(preset || false);

  useEffect(() => {
    // toggle the existing button
    const key = text.replace(/\s+/g, "").toLowerCase();
    let temp = filter;
    temp[key] = active;
    setFilter(temp);

    updateFilter();
  });

  return (
    <button
      onClick={() => {
        setActive(!active);
      }}
      className={`text-xs px-0.5 sm:text-sm sm:px-4 lg:px-6 h-12 lg:h-12 rounded-lg duration-200 ${
        active ? colorOn : colorOff
      } text-white hover:shadow-lg`}
    >
      {text}
    </button>
  );
};

const Filter = ({ filter, setFilter, updateFilter }) => {
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
          updateFilter={updateFilter}
        />
        <Button
          text="Grosse Point"
          preset={true}
          colorOn="bg-gray-800"
          colorOff="bg-gray-300"
          filter={filter}
          setFilter={setFilter}
          updateFilter={updateFilter}
        />
        <Button
          text="Hamtramck"
          preset={true}
          colorOn="bg-gray-800"
          colorOff="bg-gray-300"
          filter={filter}
          setFilter={setFilter}
          updateFilter={updateFilter}
        />
        <Button
          text="Harper Woods"
          preset={true}
          colorOn="bg-gray-800"
          colorOff="bg-gray-300"
          filter={filter}
          setFilter={setFilter}
          updateFilter={updateFilter}
        />
        <Button
          text="Highland Park"
          preset={true}
          colorOn="bg-gray-800"
          colorOff="bg-gray-300"
          filter={filter}
          setFilter={setFilter}
          updateFilter={updateFilter}
        />
      </div>
      <div className="mx-auto flex justify-center space-x-3">
        <Button
          text="In-Person"
          preset={true}
          colorOn="bg-blue-600"
          colorOff="bg-gray-300"
          filter={filter}
          setFilter={setFilter}
          updateFilter={updateFilter}
        />
        <Button
          text="Virtual"
          preset={true}
          colorOn="bg-blue-600"
          colorOff="bg-gray-300"
          filter={filter}
          setFilter={setFilter}
          updateFilter={updateFilter}
        />
        <Button
          text="Service"
          preset={true}
          colorOn="bg-blue-600"
          colorOff="bg-gray-300"
          filter={filter}
          setFilter={setFilter}
          updateFilter={updateFilter}
        />
        <Button
          text="Resource"
          preset={true}
          colorOn="bg-blue-600"
          colorOff="bg-gray-300"
          filter={filter}
          setFilter={setFilter}
          updateFilter={updateFilter}
        />
      </div>
    </div>
  );
};

export default Filter;
