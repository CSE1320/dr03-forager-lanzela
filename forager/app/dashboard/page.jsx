"use client";

import { useState, useEffect } from "react";
import MushroomCard from "@/components/MushroomCard";
import Pill from "@/components/Pill";
import Search from "@/components/Search";
import { mushrooms } from "@/data/development";

export default function DashboardPage() {
  // The parent's searchTerm
  const [searchTerm, setSearchTerm] = useState("");

  // The parent's filters
  const [selectedFilters, setSelectedFilters] = useState({
    tag: "",
    region: "",
    type: "",
  });

  // Favorites array
  const [favorites, setFavorites] = useState([]);

  // On mount, read localStorage
  useEffect(() => {
    // Retrieve any saved filters
    const storedFilters = localStorage.getItem("selectedFilters");
    if (storedFilters) {
      setSelectedFilters(JSON.parse(storedFilters));
    }
    // Retrieve favorites
    const storedFavs = localStorage.getItem("favorites");
    if (storedFavs) {
      setFavorites(JSON.parse(storedFavs));
    }
  }, []);

  // This function is called by the Filter inside Search
  // whenever the user picks new filters and clicks "Apply"
  const handleApplyFilters = (newFilters) => {
    setSelectedFilters(newFilters); // triggers re-render
    // localStorage is already updated inside FilterSettings
  };

  // Filtering logic
  const filteredMushrooms = mushrooms.filter((m) => {
    // 1) Search
    const matchesSearch = m.label.toLowerCase().includes(searchTerm.toLowerCase());

    // 2) Region
    let matchesRegion = true;
    if (selectedFilters.region) {
      // ensure your data actually has m.region = "Texas" or so
      matchesRegion = m.region === selectedFilters.region;
    }

    // 3) Tag => "Favorites"
    let matchesTag = true;
    if (selectedFilters.tag === "Favorites") {
      matchesTag = favorites.includes(m.label);
    }

    // 4) Type => "Poisonous"
    let matchesType = true;
    if (selectedFilters.type === "Poisonous") {
      matchesType = m.danger === true; // or m.filterable.is_toxic === "true"
    }

    return matchesSearch && matchesRegion && matchesTag && matchesType;
  });

  return (
    <div className="page">
      <div className="p-6 bg-[#589477] pb-[80px]">
        <div className="flex items-end justify-between text-white">
          <div>
            <p>Hi,</p>
            <h1 className="text-3xl font-bold">Chantelle</h1>
          </div>
          <div className="size-[40px] flex items-center justify-center rounded-full bg-[#5F464B] font-bold text-xl">
            C
          </div>
        </div>
      </div>

      <div className="bottom-[50px] bg-[#f2f2f2] p-6 rounded-ss-3xl rounded-se-3xl">
        {/* Search bar (with the filter modal inside) */}
        <div className="mb-8">
          <Search
            // Parent's searchTerm
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            // Pass the parent's current filters + the apply callback
            existingFilters={selectedFilters}
            onApply={handleApplyFilters}
          />
        </div>

        {/* Filter pills */}
        <div className="mb-4">
          <h1 className="text-xl font-bold mb-2">My Collection</h1>
          <div className="flex gap-2">
            {Object.entries(selectedFilters)
              .filter(([_, val]) => val)
              .map(([key, val]) => (
                <Pill
                  key={key}
                  label={val}
                  selected
                  onClick={() => {
                    const updated = { ...selectedFilters, [key]: "" };
                    setSelectedFilters(updated);
                    localStorage.setItem("selectedFilters", JSON.stringify(updated));
                  }}
                />
              ))}
          </div>
        </div>

        {/* Display mushrooms */}
        <div className="grid grid-cols-3 gap-4">
          {filteredMushrooms.map((mushroom) => (
            <MushroomCard key={mushroom.label} isViewDanger={mushroom.danger} {...mushroom} />
          ))}
        </div>
      </div>
    </div>
  );
}
