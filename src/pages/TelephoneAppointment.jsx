import React, { useState } from "react";
import Calendar from "react-calendar";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { Arrow } from "./AskPropertyType";
import "react-calendar/dist/Calendar.css";
import ChooseTime from "../components/ChooseTime";
import useCheckMobileScreen from "../util/useCheckMobileScreen";
import MobileLayout from "../layouts/MobileLayout";
import SelectComp from "../components/SelectComp";

const TelephoneAppointment = () => {
  // const [date, onDateChange] = useState(new Date());
  // const [time, setTime] = React.useState(null);

  const [date, onDateChange] = useState(
    localStorage.getItem("appointmentDate")
      ? new Date(localStorage.getItem("appointmentDate"))
      : new Date(),
  );
  const [time, setTime] = React.useState(
    localStorage.getItem("appointmentTime") || null,
  );

  const [workStartTime, setworkStartTime] = React.useState("");
  const isMobile = useCheckMobileScreen();

  const navigate = useNavigate();

  const submitHandler = () => {
    localStorage.setItem("appointmentDate", date.toLocaleDateString());
    localStorage.setItem("appointmentTime", time);

    if (isMobile) {
      return navigate("/endscreen");
    }
    navigate("/workStart");
  };

  if (isMobile)
    return (
      <MobileLayout
        disabled={!workStartTime || !date || !time}
        progress="100%"
        onSubmit={submitHandler}
      >
        <h1 className="font-semibold text-lg text-left text-[#1E1D4C] whitespace-pre-wrap">
          Quand souhaitez vous démarrer vos travaux?
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <SelectComp
            selected={workStartTime === "1"}
            setSelected={() => setworkStartTime("1")}
            text="Le plus tot possible"
            isMobile={isMobile}
            img="./assets/mobile/telephone1.png"
          />
          <SelectComp
            selected={workStartTime === "2"}
            setSelected={() => setworkStartTime("2")}
            text="Avant la neige"
            isMobile={isMobile}
            img="./assets/mobile/telephone2.png"
          />
          <SelectComp
            selected={workStartTime === "3"}
            setSelected={() => setworkStartTime("3")}
            text="Avant l’été"
            isMobile={isMobile}
            img="./assets/mobile/telephone3.png"
            expand
          />
        </div>
        <h2 className="font-semibold text-[17px] text-left text-[#1E1D4C] whitespace-pre-wrap">
          Plannifiez votre rendez-vous téléphonqiue
        </h2>
        <Calendar onChange={onDateChange} value={date} minDate={new Date()} />
        <h2 className="font-semibold text-[17px] text-left text-[#1E1D4C] whitespace-pre-wrap">
          Sélectionner l'heure
        </h2>
        <ChooseTime selected={time} setSelected={setTime} isMobile={isMobile} />
      </MobileLayout>
    );

  return (
    <>
      <div className="flex flex-col h-screen ">
        <Navbar one two three four />
        <div className="flex flex-col flex-1 w-full gap-4 px-16 pt-6 pb-4 ">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-3"
          >
            <Arrow />
            <p className="text-xl text-[#1E1D4C] font-medium ">Retour</p>
          </button>

          <section className="flex flex-col items-center flex-1 justify-evenly">
            <div className="">
              <h1 className="text-center font-semibold text-2xl text-[#1E1D4C]">
                Plannifiez votre rendez-vous téléphonqiue
              </h1>
              <p className="text-center text-lg text-[#1E1D4C]">
                Sélectionnez la date et l’heure
              </p>
            </div>
            <div className="flex w-[75%] items-center justify-evenly">
              <Calendar
                onChange={onDateChange}
                value={date}
                minDate={new Date()}
              />
              <ChooseTime selected={time} setSelected={setTime} />
            </div>

            <div
              className={`border ${
                date === "" || time === null
                  ? "border-[#C8CCD8]"
                  : "border-[#18808A]"
              } rounded-[40px] p-1 bg-[#FCFFFE]`}
            >
              <button
                type="submit"
                onClick={submitHandler}
                disabled={date === "" || time === null}
                className="disabled:bg-[#C8CCD8] bg-[#18808A] text-uppercase rounded-[40px] text-xl font-semibold text-[#FCFFFE] py-4 px-16 cursor-pointer"
              >
                CONTINUER
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default TelephoneAppointment;
