"use client";

import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import Filter from "./FilterSettings";

const Search = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <>
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 rounded-full text-sm"
          />
        </div>
        <button
          className="p-3 rounded-full text-[#589477] text-xl"
          onClick={() => setIsFilterOpen(true)}
        >
          <FaFilter />
        </button>
      </div>

      {/* Filter Component */}
      <Filter isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
    </>
  );
};

export default Search;
