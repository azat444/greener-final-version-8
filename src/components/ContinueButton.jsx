import React from 'react';

const ContinueButton = ({ state1, state2, message = 'CONTINUER' }) => {
  return (
    <div
      className={`border ${
        state1 === '' || state2 === ''
          ? 'border-[#C8CCD8]'
          : 'border-[#18808A] hover:shadow-lg'
      } rounded-[40px] p-1 bg-[#FCFFFE] transition-all`}
    >
      <button
        type="submit"
        disabled={state1 === '' || state2 === ''}
        className="disabled:bg-[#C8CCD8] bg-[#18808A] text-uppercase rounded-[40px] text-xl font-semibold text-[#FCFFFE] py-4 px-16 cursor-pointer"
      >
        {message}
      </button>
    </div>
  );
};

export default ContinueButton;
