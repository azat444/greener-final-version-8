import React from 'react';
import Navbar from '../components/Navbar';
import MobileContinueButton from '../components/MobileContinueButton';

const MobileLayout = ({
  children,
  disabled,
  endScreen,
  progress = '50%',
  question,
  onSubmit,
  subText,
  house,
  houseImg,
  btnText = 'CONTINUER',
}) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col min-h-[80vh]">
      <Navbar />

      <section className="flex flex-col items-center py-3">
        <div className="w-[90%] mx-auto flex items-center justify-start h-3 bg-[#FCFFFE] rounded-full">
          <div
            className="h-2 bg-[#8DD9DE] rounded-full m-1 shadow-bar"
            style={{ width: progress }}
          ></div>
        </div>

        <h1 className="font-semibold text-lg text-center text-[#1E1D4C] px-12 mt-6 whitespace-pre-wrap">
          {question}
        </h1>
        <p className="text-sm">{subText}</p>
      </section>

      <section className="flex flex-col flex-1 gap-5 mx-6 mt-6">
        {children}
      </section>

      {house ? (
        <img
          src={houseImg ?? './assets/mobile/home3d.png'}
          alt="House"
          className="h-[250px] w-[250px] mx-auto mt-6"
        />
      ) : null}

      {endScreen ? (
        <a
          href="https://greener.fr/"
          target="_blank"
          rel="noreferrer"
          className="mx-8 my-4"
        >
          <div className="pointer-events-none">
            <MobileContinueButton disabled={disabled} message={btnText} />
          </div>
        </a>
      ) : (
        <div className="mx-8 my-4">
          <MobileContinueButton disabled={disabled} message={btnText} />
        </div>
      )}
    </form>
  );
};

export default MobileLayout;
