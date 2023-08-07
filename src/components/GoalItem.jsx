import React from 'react';
import { InfoIcon, Tooltip } from './HeatEnergyItem';

const GoalItem = ({
  icon,
  heading,
  text,
  selected,
  setGoal,
  number,
  isMobile,
  hoverTitle,
  hoverDescription,
}) => {
  if (isMobile)
    return (
      <div
        className={`flex relative items-center justify-center border-[#c8ccd8] bg-[#FCFFFE] rounded-[15px] h-20 w-auto cursor-pointer border-[1.5px] px-2 py-2 hover:border-[#18808A] hover:shadow-lg transition-all ${
          selected && 'selected'
        }`}
        onClick={() => {
          setGoal(number);
        }}
      >
        <div className={`flex w-full gap-2`}>
          <div className="flex items-center justify-center">
            <img
              className={isMobile ? 'w-18 h-18' : ''}
              src={icon}
              alt="Goal"
            />
          </div>
          <div className="flex flex-col justify-center flex-1 gap-2">
            <p className="text-[#1E1D4C] font-semibold text-base">{heading}</p>
            <p className="text-[#1E1D4C] font-medium text-sm">{text}</p>
          </div>
        </div>
      </div>
    );

  return (
    <div
      className={`flex relative gap-8 items-center justify-center border-[#c8ccd8] bg-[#FCFFFE] rounded-[20px] h-32 w-[40rem] cursor-pointer border-[1.5px] py-7 px-7 hover:border-[#18808A] hover:shadow-lg transition-all ${
        selected && 'selected'
      }`}
      onClick={() => {
        setGoal(number);
      }}
    >
      <div className="absolute top-3 right-4">
        <Tooltip title={hoverTitle} description={hoverDescription}>
          <InfoIcon />
        </Tooltip>
      </div>
      <div className={`flex w-full`}>
        <div className="flex items-center justify-center">
          <img className={isMobile ? 'w-9 h-10' : ''} src={icon} alt="Goal1" />
        </div>
        <div className="flex flex-col justify-center flex-1 ">
          <p className="text-[#1E1D4C] font-semibold text-2xl">{heading}</p>
          <p className="text-[#1E1D4C] font-medium text-2xl">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default GoalItem;
