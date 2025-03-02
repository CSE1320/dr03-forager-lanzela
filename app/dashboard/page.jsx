import MushroomCard from "@/components/MushroomCard";
import Pill from "@/components/Pill";
import Search from "@/components/Search";
import { mushrooms } from "@/data/development";

export default function DashboardPage() {
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
        <div className="mb-8">
          <Search />
        </div>
        <div className="mb-4">
          <h1 className="text-xl font-bold mb-2">My Collection</h1>
          <div className="flex gap-2">
            <Pill label="Texas" selected />
            <Pill label="Favorites" selected />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {mushrooms.map((mushroom) => (
            <MushroomCard
              key={`${mushroom.label}-${mushroom.percentage}`}
              isViewDanger={mushroom.danger}
              {...mushroom}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
