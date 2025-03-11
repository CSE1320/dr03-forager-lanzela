import ComparisonTable from "@/components/ComparisonTable";
import Message from "@/components/Message";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

export default function MushroomComparisonPage() {
  return (
    <>
      <div className="bg-[#589477] p-4 text-white rounded-es-3xl rounded-ee-3xl sticky top-0 z-20 h-[100px]">
        <div className="relative">
          <Link
            href="/mushroom"
            className="p-2 absolute top-4 left-2 transform -translate-y-1/2"
          >
            <FaChevronLeft className="text-2xl" />
          </Link>
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
