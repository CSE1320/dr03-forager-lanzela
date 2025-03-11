"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Message from "@/components/Message";
import Mushroom from "@/components/Mushroom";
import SimilarMatchList from "@/components/SimilarMatchList";

export default function MushroomPage() {
  const [isModalAlertOpen, setIsModalAlertOpen] = useState(false);

  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  const storageIsModalAlertOpen = localStorage.getItem("isModalAlertOpen") || "true";
  useEffect(() => {
    if (storageIsModalAlertOpen === "true") {
      setIsModalAlertOpen(true);
    }
  }, [storageIsModalAlertOpen]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const currentLabel = "Death Cap";
  const isFavorite = favorites.includes(currentLabel);

  const toggleFavorite = () => {
    setFavorites((prev) => {
      if (prev.includes(currentLabel)) {
        return prev.filter((lbl) => lbl !== currentLabel);
      }
      return [...prev, currentLabel];
    });
  };

  return (
    <div className={isModalAlertOpen ? "overflow-hidden h-[836px]" : ""}>
      <div className="bg-[#589477] p-4 text-white rounded-es-3xl rounded-ee-3xl sticky top-0 z-20 h-[100px]">
        <div className="relative">
          <Link href="/dashboard" className="p-2 absolute top-4 left-2 transform -translate-y-1/2">
            <FaChevronLeft className="text-2xl" />
          </Link>
          <h1 className="text-3xl text-center mt-4">Match Result</h1>
        </div>
      </div>

      <div className="py-4 px-8">
        <div className="flex justify-between items-center gap-2 mb-2">
          <p className="text-sm">Not what you expect?</p>
          <button className="flex items-center gap-2 p-1 bg-[#FF5050] hover:bg-[#de3d3d] duration-150 text-white rounded-lg text-sm">
            Report Error
            <FaChevronRight />
          </button>
        </div>
        <Message />

        <div className="flex justify-end mt-6">
          <Link href="/comparison" className="flex items-center gap-2 p-1 text-sm text-[#888787]">
            Compare
            <FaChevronRight />
          </Link>
        </div>

        <Mushroom className="mt-2" />

        <div className="flex justify-end mt-4">
          {/* Pink Favorites Button */}
          <button
            onClick={toggleFavorite}
            className={`px-4 py-2 rounded text-white ${isFavorite ? "bg-pink-600" : "bg-pink-400"}`}
          >
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>

        <SimilarMatchList className="mt-4" />
      </div>

      {isModalAlertOpen && (
        <div className="absolute z-30 top-0 left-0 w-full h-full flex justify-center items-center p-4 backdrop-blur-md">
          <Message
            header="ATTENTION!"
            message="Our system can make mistakes! Remember to verify important information and use your own judgement to determine if any mushroom is safe. Be sure to use the “Report Error” button if you suspect a mistake."
            onClose={() => {
              setIsModalAlertOpen(false);
              localStorage.setItem("isModalAlertOpen", "false");
            }}
          />
        </div>
      )}
    </div>
  );
}

