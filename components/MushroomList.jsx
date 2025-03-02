import { mushrooms } from "@/data/development";
import MushroomCard from "./MushroomCard";

const MushroomList = ({ title, className }) => {
  return (
    <div className={className}>
      <p className="text-center font-bold text-xl">{title}</p>
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
  );
};

export default MushroomList;
