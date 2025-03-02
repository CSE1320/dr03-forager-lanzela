import React from "react";
import { FaPlusCircle } from "react-icons/fa";

const Mushroom = ({ className }) => {
  return (
    <div className={className}>
      <div className="bg-white pt-3 px-2 pb-8 shadow-md relative z-10">
        <img
          src="/contents/mush-1.png"
          alt="mushroom"
          className="aspect-[4/3] w-full object-cover object-center"
        />
      </div>
      <div className="flex justify-between items-center gap-2 mt-4">
        <div>
          <h1 className="text-2xl font-bold">Death Cap</h1>
          <p className="italic">Amanita phallodies</p>
        </div>
        <button className="text-[#579076]">
          <FaPlusCircle className="text-[30px]" />
        </button>
      </div>
      <div className="bg-[#8E4A49] py-4 px-8 rounded-3xl text-white mt-3">
        <p className="font-bold">Fast Facts</p>
        <div className="mt-3">
          <p>Cap Diameter: 5-15cm</p>
          <p>Gill Color: White</p>
          <p>Stem Color: White</p>
          <p>Habitat: Temperate regions</p>
        </div>
      </div>
      <p className="mt-3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
        assumenda quas optio ullam velit laboriosam voluptatibus corrupti enim
        itaque quasi consectetur magnam, suscipit maiores facilis, numquam
        temporibus vel blanditiis illo.
      </p>
    </div>
  );
};

export default Mushroom;
