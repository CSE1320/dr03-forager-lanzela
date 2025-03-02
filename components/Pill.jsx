const Pill = ({ selected, label, onClick }) => {
  const buttonClass = `px-3 py-1 text-xs rounded-full transition ${
    selected
      ? "bg-[#589477] text-white"
      : "bg-gray-300 text-gray-700 hover:bg-gray-400"
  }`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
};

export default Pill;
