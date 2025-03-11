"use client";
import React, { useState } from "react";
import PillList from "./PillList";

export default function Filter({
  isOpen,
  onClose,
  existingFilters = { tag: "", region: "", type: "" },
  onApply,
}) {
  const [selectedFilters, setSelectedFilters] = useState(existingFilters);

  const filterOptions = {
    tag: ["Favorites", "Recents"],
    region: ["Texas", "North America", "South America", "Asia", "Europe", "Africa"],
    type: ["Poisonous", "Medicinal", "Mythical", "Good for Broths"],
  };

  const handleSelection = (category, option) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: prev[category] === option ? "" : option,
    }));
  };

  const handleApply = () => {
    localStorage.setItem("selectedFilters", JSON.stringify(selectedFilters));
    if (onApply) {
      // TELL THE DASHBOARD IMMEDIATELY
      onApply(selectedFilters);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed z-[100] inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-80">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-black">FILTER</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            ✖
          </button>
        </div>

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

        <div className="flex justify-end mt-4">
          <button onClick={handleApply} className="bg-green-500 text-white px-4 py-2 rounded-md">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}



