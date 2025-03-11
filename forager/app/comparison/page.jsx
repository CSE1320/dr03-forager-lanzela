"use client";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";
import ComparisonTable from "@/components/ComparisonTable";
import Message from "@/components/Message";

export default function MushroomComparisonPage() {
  const router = useRouter();

  function setScreen(path) {
    router.push(path);
  }

  return (
    <>
      <div className="bg-[#589477] p-4 text-white rounded-es-3xl rounded-ee-3xl sticky top-0 z-20 h-[100px]">
        <div className="relative">
          <a
            href="/mushroom"
            className="p-2 absolute top-4 left-2 transform -translate-y-1/2"
            onClick={(e) => {
              e.preventDefault();
              setScreen("/mushroom");
            }}
          >
            <FaChevronLeft className="text-2xl" />
          </a>
          <h1 className="text-2xl text-center mt-4">Compare</h1>
        </div>
      </div>

      <div className="page p-4">
        <div className="my-6">
          <Message />
        </div>
        <ComparisonTable />
      </div>
    </>
  );
}
