import { mushrooms } from "@/data/development";
import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import MushroomCard from "./MushroomCard";
import Message from "./Message";

const SimilarMatchList = ({ className }) => {
  const [isModalAlertOpen, setIsModalAlertOpen] = useState(false);

  return (
    <div className="relative">
      <div className={className}>
        <div className="text-center font-bold text-xl flex items-center justify-center gap-2">
          <p>Similar Matches</p>
          <button onClick={() => setIsModalAlertOpen(true)}>
            <FaInfoCircle />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-3">
          {mushrooms.map((mushroom) => (
            <MushroomCard
              key={`${mushroom.label}-${mushroom.percentage}`}
              isViewDanger={mushroom.danger}
              isViewPercentage
              {...mushroom}
            />
          ))}
        </div>
      </div>

      {isModalAlertOpen && (
        <div className="fixed z-30 top-0 left-0 w-full h-full flex justify-center items-center p-4">
          <Message
            type="success"
            hideHeader
            message=" Percentages indicate lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            onClose={() => {
              setIsModalAlertOpen(false);
              localStorage.setItem("isModalAlertOpen", "false");
            }}
          />
        </div>
      )}
    </div>
  );
};

export default SimilarMatchList;
