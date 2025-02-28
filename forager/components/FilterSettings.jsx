"use client";
import React, { useState } from "react";

const Filter = ({ isOpen, onClose }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    tag: "Favorites",
    region: "Texas",
    type: "Poisonous",
  });

  const filterOptions = {
    tag: ["Favorites", "Recents"],
    region: ["Texas", "North America", "South America", "Asia", "Europe", "Africa"],
    type: ["Poisonous", "Medicinal", "Mythical", "Good for Broths"],
  };

  const handleSelection = (category, option) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: prev[category] === option ? null : option,
    }));
  };

  const getButtonClass = (category, option) => {
    return `px-3 py-1 text-xs rounded-full transition ${
      selectedFilters[category] === option
        ? "bg-[#589477] text-white"
        : "bg-gray-300 text-gray-700 hover:bg-gray-400"
    }`;
  };

  if (!isOpen) return null; // Hide component when not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
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
            <h3 className="text-sm font-bold text-black capitalize">{category}</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {options.map((option) => (
                <button
                  key={option}
                  className={getButtonClass(category, option)}
                  onClick={() => handleSelection(category, option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;

