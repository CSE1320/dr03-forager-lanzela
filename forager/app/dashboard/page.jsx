"use client"; 

import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import Filter from "../../components/FilterSettings";

export default function DashboardPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="p-6">
      <NavBar />

      <div className="mt-4">
        <h1 className="text-2xl font-bold">Dashboard Page</h1>
      </div>

      {/* Open Filter Button */}
      <button
        onClick={() => setIsFilterOpen(true)}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Open Filter
      </button>

      {/* Filter Component */}
      <Filter isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
    </div>
  );
}


