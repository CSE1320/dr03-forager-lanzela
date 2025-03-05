import Pill from "./Pill";

const PillList = ({ title, options, selectedOption, onClick }) => {
  return (
    <>
      <h3 className="text-sm font-bold text-black capitalize">{title}</h3>
      <div className="flex flex-wrap gap-2 mt-2">
        {options.map((option) => (
          <Pill
            key={option}
            onClick={() => onClick(option)}
            selected={selectedOption === option}
            label={option}
          />
        ))}
      </div>
    </>
  );
};

export default PillList;
