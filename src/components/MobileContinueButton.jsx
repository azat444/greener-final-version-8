import React from 'react';

const MobileContinueButton = ({ disabled, message = 'CONTINUER' }) => {
  return (
    <div
      className={`border ${
        disabled ? 'border-[#C8CCD8]' : 'border-[#18808A] hover:shadow-lg'
      } rounded-[40px] p-1 bg-[#FCFFFE] transition-all `}
    >
      <button
        type="submit"
        disabled={disabled}
        className="disabled:bg-[#C8CCD8] bg-[#18808A] text-uppercase rounded-[40px] text-xl font-semibold text-[#FCFFFE] py-[10px] cursor-pointer w-[100%]"
      >
        {message}
      </button>
    </div>
  );
};

export default MobileContinueButton;
