import React from 'react';

const MobileHeatEnergy = ({
  icon,
  text,
  selected,
  setSelected,
  number,
  size,
}) => {
  return (
    <div
      className={`h-[52px] p-2 relative flex gap-1 items-center border-2 rounded-[15px] bg-[#FCFFFE] cursor-pointer transition-all ${
        selected
          ? ' border-[#18808A] shadow-lg text-[#18808A]'
          : ' border-[#c8ccd8] text-[#999BA3]'
      }`}
      onClick={() => setSelected(number)}
    >
      <img className={size + ' '} src={icon} alt="Icon" />
      <p className={` text-[15px] font-medium px-1 py-2`}>{text}</p>
    </div>
  );
};

export default MobileHeatEnergy;
