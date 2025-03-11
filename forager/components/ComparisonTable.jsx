// import { FaTimes } from "react-icons/fa";
// import { TbAlertTriangle } from "react-icons/tb";

// const ComparisonTable = ({ className }) => {
//   const comparison = [
//     {
//       category: "Cap Shape",
//       value1: "Flat",
//       value2: "Flat",
//     },
//     {
//       category: "Cap Color",
//       value1: "Brown",
//       value2: "Yellow",
//     },
//     {
//       category: "Cap Texture",
//       value1: "Smooth",
//       value2: "Smooth",
//     },
//     {
//       category: "Gils Type",
//       value1: "Free",
//       value2: "Free",
//     },
//     {
//       category: "Gils Color",
//       value1: "White",
//       value2: "White",
//     },
//     {
//       category: "Stem Shape",
//       value1: "Slender",
//       value2: "Slender",
//     },
//     {
//       category: "Stem Color",
//       value1: "White",
//       value2: "White",
//     },
//     {
//       category: "Stem Ring",
//       value1: "Absent",
//       value2: "Absent",
//     },
//     {
//       category: "Habitat",
//       value1: "?",
//       value2: "Near oak/beach",
//     },
//   ];
//   return (
//     <div className={className}>
//       <div className="grid grid-cols-2 gap-4">
//         <div className="">
//           <div className="bg-white pt-2 px-1 pb-5 shadow-md">
//             <div className="mb-2 flex items-center gap-2 h-[23px]"></div>
//             <img
//               src="/contents/mush-1.png"
//               alt="mushroom"
//               className="aspect-[6/7] w-full object-cover"
//             />
//           </div>
//           <p className="mt-2 text-center text-sm font-semibold">Your Photo</p>
//         </div>
//         <div className="">
//           <div className="bg-white pt-2 px-1 pb-5 shadow-md">
//             <div className="mb-2 flex items-center gap-2 h-[23px]">
//               <img src="/icons/skull.png" alt="danger" />
//               <div className="p-1 text-[10px] rounded-lg bg-red-500 text-white flex items-center gap-1">
//                 <TbAlertTriangle />
//                 90% Match
//               </div>
//             </div>
//             <img
//               src="/contents/mush-1.png"
//               alt="mushroom"
//               className="aspect-[6/7] w-full object-cover"
//             />
//           </div>
//           <p className="mt-2 text-center text-sm font-semibold">Death Cap</p>
//         </div>
//       </div>

//       <div className="bg-white p-2 shadow-md mt-5">
//         <table className="w-full table-fixed border-separate border-spacing-2">
//           <tbody>
//             {comparison.map((item, index) => (
//               <tr className="text-[12px]" key={`comparison-${index}`}>
//                 <td className=" p-1 border-b border-[#203B5F] flex items-center gap-1">
//                   <div className="size-4 flex items-center justify-center bg-gray-300 rounded-full">
//                     <FaTimes className="text-[10px]" />
//                   </div>
//                   <p className="flex-1 text-center">{item.value1}</p>
//                 </td>
//                 <td className=" p-1 text-center border-x border-[#203B5F]">
//                   {item.category}
//                 </td>
//                 <td className=" p-1 text-center">{item.value2}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ComparisonTable;
"use client";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { TbAlertTriangle } from "react-icons/tb";

const ComparisonTable = ({ className }) => {
  // Initial comparison data (stored in state)
  const [comparison, setComparison] = useState([
    { category: "Cap Shape", value1: "Flat", value2: "Flat" },
    { category: "Cap Color", value1: "Brown", value2: "Yellow" },
    { category: "Cap Texture", value1: "Smooth", value2: "Smooth" },
    { category: "Gils Type", value1: "Free", value2: "Free" },
    { category: "Gils Color", value1: "White", value2: "White" },
    { category: "Stem Shape", value1: "Slender", value2: "Slender" },
    { category: "Stem Color", value1: "White", value2: "White" },
    { category: "Stem Ring", value1: "Absent", value2: "Absent" },
    { category: "Habitat", value1: "?", value2: "Near oak/beach" },
  ]);

  // Function to handle inline text editing
  const handleEdit = (index, key, event) => {
    const updatedComparison = [...comparison];
    updatedComparison[index][key] = event.target.textContent;
    setComparison(updatedComparison);
  };

  // Function to delete a row
  const handleDelete = (index) => {
    const updatedComparison = comparison.filter((_, i) => i !== index);
    setComparison(updatedComparison);
  };

  return (
    <div className={className}>
      {/* Image comparison section */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="bg-white pt-2 px-1 pb-5 shadow-md">
            <div className="mb-2 flex items-center gap-2 h-[23px]"></div>
            <img
              src="/contents/mush-1.png"
              alt="mushroom"
              className="aspect-[6/7] w-full object-cover"
            />
          </div>
          <p className="mt-2 text-center text-sm font-semibold">Your Photo</p>
        </div>
        <div>
          <div className="bg-white pt-2 px-1 pb-5 shadow-md">
            <div className="mb-2 flex items-center gap-2 h-[23px]">
              <img src="/icons/skull.png" alt="danger" />
              <div className="p-1 text-[10px] rounded-lg bg-red-500 text-white flex items-center gap-1">
                <TbAlertTriangle />
                90% Match
              </div>
            </div>
            <img
              src="/contents/mush-1.png"
              alt="mushroom"
              className="aspect-[6/7] w-full object-cover"
            />
          </div>
          <p className="mt-2 text-center text-sm font-semibold">Death Cap</p>
        </div>
      </div>

      {/* Editable Comparison Table */}
      <div className="bg-white p-2 shadow-md mt-5">
        <table className="w-full table-fixed border-separate border-spacing-2">
          <tbody>
            {comparison.map((item, index) => (
              <tr className="text-[12px]" key={`comparison-${index}`}>
                {/* Column 1 - Editable Value1 */}
                <td className="p-1 border-b border-[#203B5F] flex items-center gap-1">
                  <button
                    onClick={() => handleDelete(index)}
                    className="size-4 flex items-center justify-center bg-gray-300 rounded-full hover:bg-red-500 transition"
                  >
                    <FaTimes className="text-[10px] text-white" />
                  </button>
                  <p
                    className="flex-1 text-center outline-none"
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => handleEdit(index, "value1", e)}
                  >
                    {item.value1}
                  </p>
                </td>

                {/* Column 2 - Static Category */}
                <td className="p-1 text-center border-x border-[#203B5F]">
                  {item.category}
                </td>

                {/* Column 3 - Editable Value2 */}
                <td className="p-1 text-center">
                  <p
                    className="outline-none"
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => handleEdit(index, "value2", e)}
                  >
                    {item.value2}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;
