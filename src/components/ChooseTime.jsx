import React from 'react';

const times = [
  '09:00',
  '09:30',
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
  '17:30',
  '18:00',
  '18:30',
];
const ChooseTime = ({ selected, setSelected, isMobile }) => {
  const disabled = ['15:30', '16:00'];

  return (
    <div
      className={` ${
        isMobile ? 'flex overflow-x-auto gap-3 pb-4' : 'grid grid-cols-4 gap-3'
      }`}
    >
      {times.map((time) => (
        <button
          key={time}
          disabled={disabled.includes(time)}
          onClick={() => setSelected(() => time)}
          type="button"
          className={`flex items-center justify-center border border-[#C8CCD8] rounded-lg disabled:bg-[#C8CCD8] disabled:bg-opacity-20 disabled:text-[#C8CCD8] transition-all ${
            isMobile ? 'px-3 py-2' : ' py-3 px-4'
          } ${
            selected === time
              ? 'bg-[#18808A] text-[#FCFFFE]'
              : 'bg-[#FCFFFE] text-[#1E1D4C] hover:bg-[#18808A] hover:text-[#FCFFFE]'
          }`}
        >
          <p className={` font-semibold text-[17px] `}>{time}</p>
        </button>
      ))}
    </div>
  );
};

export default ChooseTime;
