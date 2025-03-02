import Link from "next/link";
import { TbAlertTriangleFilled } from "react-icons/tb";

const MushroomCard = ({
  label,
  img,
  href,
  percentage,
  flag,
  isViewDanger,
  isViewPercentage,
}) => {
  return (
    <Link href={href}>
      <div className="bg-white pt-2 px-1 pb-5 shadow-md relative z-10">
        <img
          src={img}
          alt={`${label} image`}
          className="aspect-[6/7] w-full object-cover"
        />

        {(isViewDanger || isViewPercentage) && (
          <div className="absolute top-4 left-4 flex items-center gap-2">
            {isViewPercentage && (
              <div
                className={`p-1 text-[10px] rounded-lg ${
                  flag === "danger"
                    ? "bg-red-500 text-white"
                    : flag === "normal"
                    ? "bg-gray-500 text-white"
                    : "bg-green-500 text-white"
                }`}
              >
                {percentage}%
              </div>
            )}
            {isViewDanger && (
              <TbAlertTriangleFilled className="text-red-500 text-xl" />
            )}
          </div>
        )}
      </div>
      <p className="mt-2 text-center text-sm font-semibold">{label}</p>
    </Link>
  );
};

export default MushroomCard;
