"use client";

import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import Filter from "./FilterSettings";


const Search = ({ value, onChange, existingFilters, onApply }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <>
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 rounded-full text-sm"
            // Controlled by parent
            value={value}
            onChange={onChange}
          />
        </div>
        <button
          className="p-3 rounded-full text-[#589477] text-xl"
          onClick={() => setIsFilterOpen(true)}
        >
          <FaFilter />
        </button>
      </div>

      {/* FilterSettings modal is in the same file, but we pass the parent's filters and callback */}
      <Filter
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        existingFilters={existingFilters}
        onApply={onApply}   // Tells parent "apply these filters"
      />
    </>
  );
};

export default Search;
