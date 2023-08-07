import React from 'react';
import { Link } from 'react-router-dom';

const NameInput = ({
  state,
  changeHandler,
  backNav,
  nextNav,
  text1,
  text2,
  label,
  isMobile,
}) => {
  return (
    // <section className="flex flex-col items-center gap-24">
    //   <div className="flex items-center gap-2 w-[100vw]">
    //     <div className="ml-28">
    //       <Link to={backNav}>
    //         <img src="./assets/arrow.svg" alt="Back" />
    //       </Link>
    //     </div>
    //     <h1 className="flex-1 my-0 ml-32 text-center mr-72 heading">
    //       {text1}
    //       <br />
    //       {text2}
    //     </h1>
    //   </div>

    <form className="h-[85vh] flex flex-col gap-4 xl:gap-24 items-center">
      <div className="flex items-center">
        <div className={`absolute ${isMobile ? 'top-24 left-4' : 'left-28'}`}>
          <Link to={backNav}>
            <img
              className={isMobile && 'w-7 h-7'}
              src="./assets/arrow.svg"
              alt="Back"
            />
          </Link>
        </div>
        <div className="flex items-center flex-1 gap-2">
          <h1
            className={
              isMobile
                ? 'inter text-2xl text-center font-bold leading-7 px-6 py-4'
                : 'mx-auto heading flex-1 text-center lg:text-5xl px-24'
            }
          >
            {text1}
            <br />
            {text2}
          </h1>
        </div>
      </div>

      <div
        className={`flex-1 justify-center flex flex-col ${
          isMobile ? 'gap-4' : 'gap-8'
        } items-center`}
      >
        <label className={`${isMobile ? 'text-sm' : ''}`}>{label}</label>
        <input
          autoFocus
          className={`input bg-transparent ${
            isMobile ? '!w-80 !h-16 !text-xl !p-3' : ''
          }`}
          type="text"
          value={state}
          onChange={changeHandler}
        />
      </div>

      <Link to={nextNav}>
        <button type="submit" disabled={state === ''} className="mt-12 button">
          CONTINUER
        </button>
      </Link>
    </form>
  );
};

export default NameInput;
