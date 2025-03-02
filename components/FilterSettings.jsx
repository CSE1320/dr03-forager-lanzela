"use client";
import React, { useState } from "react";
import PillList from "./PillList";

const Filter = ({ isOpen, onClose }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    tag: "Favorites",
    region: "Texas",
    type: "Poisonous",
  });

  const filterOptions = {
    tag: ["Favorites", "Recents"],
    region: [
      "Texas",
      "North America",
      "South America",
      "Asia",
      "Europe",
      "Africa",
    ],
    type: ["Poisonous", "Medicinal", "Mythical", "Good for Broths"],
  };

  const handleSelection = (category, option) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: prev[category] === option ? null : option,
    }));
  };

  if (!isOpen) return null; // Hide component when not open

  return (
    <div className="fixed z-[100] inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-80">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-black">FILTER</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            ✖
          </button>
        </div>

        {/* Filter Sections */}
        {Object.entries(filterOptions).map(([category, options]) => (
          <div key={category} className="mt-4">
            <PillList
              title={category}
              options={options}
              selectedOption={selectedFilters[category]}
              onClick={(val) => handleSelection(category, val)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
