import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Arrow } from "./AskPropertyType";
import ContinueButton from "../components/ContinueButton";

const AskWorkStart = () => {
  // const [workStartTime, setworkStartTime] = React.useState('');
  const [workStartTime, setworkStartTime] = React.useState(
    localStorage.getItem("workStartTime") || "",
  );

  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    return navigate("/endscreen");
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar one two three four />
        <div className="flex flex-col flex-1 w-full gap-4 px-16 pt-6 pb-4 ">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-3"
          >
            <Arrow />
            <p className="text-xl text-[#1E1D4C] font-medium ">Retour</p>
          </button>

          <form
            onSubmit={submitHandler}
            className="flex flex-col items-center flex-1 py-6"
          >
            <h1 className="font-semibold text-2xl text-[#1E1D4C] py-12">
              Quand souhaitez-vous démarrer vos travaux?
            </h1>
            <div className="flex items-center justify-center gap-6 xl:gap-28 ">
              <div
                className={`py-5 px-3 flex bg-white flex-col items-center w-52 h-48 border border-[#C8CCD8] rounded-[30px] justify-center gap-2 cursor-pointer hover:border-[#18808A] hover:shadow-lg transition-all ${
                  workStartTime === "1" && "selected"
                }`}
                onClick={() => {
                  setworkStartTime("1");
                  localStorage.setItem("workStartTime", "1");
                }}
              >
                <div className="w-[125px] h-[125px] flex items-center justify-center  ml-2">
                  <img src="./assets/calender.png" alt="Calender" />
                </div>
                <p className="text-[#999BA3] font-semibold text-xl">
                  Le plus tôt possible
                </p>
              </div>
              <div
                className={`py-5 px-3 flex bg-white flex-col items-center w-52 h-48 border border-[#C8CCD8] rounded-[30px] justify-center gap-2 cursor-pointer hover:border-[#18808A] hover:shadow-lg transition-all ${
                  workStartTime === "2" && "selected"
                }`}
                onClick={() => {
                  setworkStartTime("2");
                  localStorage.setItem("workStartTime", "2");
                }}
              >
                <div className="w-[125px] h-[125px] flex items-center justify-center  ml-2">
                  <img src="./assets/calender.png" alt="Calender" />
                </div>
                <p className="text-[#999BA3] font-semibold text-xl">
                  Avant l’hiver
                </p>
              </div>

              <div
                className={`py-5 px-3 flex bg-white flex-col items-center w-52 h-48 border border-[#C8CCD8] rounded-[30px] justify-center gap-2 cursor-pointer hover:border-[#18808A] hover:shadow-lg transition-all ${
                  workStartTime === "3" && "selected"
                }`}
                onClick={() => {
                  setworkStartTime("3");
                  localStorage.setItem("workStartTime", "3");
                }}
              >
                <div className="w-[125px] h-[125px] flex items-center justify-center ml-2">
                  <img src="./assets/calender.png" alt="Calender" />
                </div>
                <p className="text-[#999BA3] font-semibold text-xl">
                  Avant l’été
                </p>
              </div>
            </div>

            <div className="my-12">
              <ContinueButton state1={workStartTime} stat2="NILL" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AskWorkStart;
