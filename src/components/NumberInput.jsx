import React from 'react';
import ContinueButton from './ContinueButton';

const NumberInput = ({
  state,
  changeHandler,
  label,
  unit,
  type,
  placeholder,
  isMobile,
  onSubmit,
  IDKHandler,
  style,
}) => {
  if (isMobile)
    return (
      <div className="flex flex-col w-full gap-2">
        <p className="text-base font-semibold text-[#1E1D4C] text-left">
          {label}
        </p>
        <div className="w-full flex items-center bg-[#FCFFFE] h-12 rounded-xl border  px-3 text-base leading-7">
          <input
            autoFocus
            type={type ? type : 'number'}
            className="flex-1 h-full bg-[#FCFFFE] rounded-xl outline-none border-none text-[#1E1D4C] placeholder:text-[#C8CCD8]"
            value={state}
            placeholder={placeholder}
            onChange={changeHandler}
          />
          <p className="text-[#1E1D4C]">{unit}</p>
        </div>
        {IDKHandler ? (
          <button
            type="button"
            className="text-base ml-auto font-normal cursor-pointer text-[#1E1D4C]"
            onClick={IDKHandler}
          >
            Je ne sais pas
          </button>
        ) : null}
      </div>
    );

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center w-[60%] mx-auto"
    >
      <div className="flex flex-col w-full gap-2">
        <p className="text-base font-semibold text-[#1E1D4C] text-left">
          {label}
        </p>
        <div className="w-full flex items-center bg-[#FCFFFE] h-12 rounded-xl border  px-3 text-base leading-7">
          <input
            autoFocus
            type={type ? type : 'number'}
            className="flex-1 h-full bg-[#FCFFFE] rounded-xl outline-none border-none text-[#1E1D4C] placeholder:text-[#C8CCD8]"
            value={state}
            placeholder={placeholder}
            onChange={changeHandler}
          />
          <p className="text-[#1E1D4C]">{unit}</p>
        </div>
        {IDKHandler ? (
          <button
            type="button"
            className="text-base ml-auto font-normal cursor-pointer text-[#1E1D4C]"
            onClick={IDKHandler}
          >
            Je ne sais pas
          </button>
        ) : null}
      </div>

      <div className={style} />

      <ContinueButton state1={state} state2="NILL" />
    </form>
  );
};

export default NumberInput;
