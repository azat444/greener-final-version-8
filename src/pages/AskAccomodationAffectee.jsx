import React from "react";
import { useNavigate } from "react-router-dom";
import HeatEnergyItem from "../components/HeatEnergyItem";
import { Arrow } from "./AskPropertyType";
import Navbar from "../components/Navbar";
import useCheckMobileScreen from "../util/useCheckMobileScreen";
import MobileLayout from "../layouts/MobileLayout";
import MobileRectangleOption from "../components/MobileRectangleOption";
import ContinueButton from "../components/ContinueButton";

const AskAccomodationAffectee = () => {
  // const [accomodationAffectee, setAccomodationAffectee] = React.useState('');
  const [accomodationAffectee, setAccomodationAffectee] = React.useState(
    localStorage.getItem("accomodationAffectee") || ""
  );
  const isMobile = useCheckMobileScreen();

  const setSelected = (number) => {
    setAccomodationAffectee(number);
    localStorage.setItem("accomodationAffectee", number);
  };

  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (accomodationAffectee) {
      return navigate("/people");
    }
  };

  if (isMobile)
    return (
      <MobileLayout
        disabled={!accomodationAffectee}
        progress="64%"
        question="Dans ce logement, vous êtes:"
        onSubmit={submitHandler}
      >
        <div className="flex flex-col gap-5 mt-12">
          <MobileRectangleOption
            img="./assets/mobile/affectee1.png"
            text="Propriétéaire occupant"
            onClick={() => {
              setAccomodationAffectee("1");
              localStorage.setItem("accomodationAffectee", "1");
            }}
            selected={accomodationAffectee === "1"}
          />
          <MobileRectangleOption
            img="./assets/mobile/affectee2.png"
            text="Proprétaire d'une résidence secondaire "
            onClick={() => {
              setAccomodationAffectee("2");
              localStorage.setItem("accomodationAffectee", "2");
            }}
            selected={accomodationAffectee === "2"}
          />
          <MobileRectangleOption
            img="./assets/mobile/affectee3.png"
            text="Propriétaire bailleur"
            onClick={() => {
              setAccomodationAffectee("3");
              localStorage.setItem("accomodationAffectee", "3");
            }}
            selected={accomodationAffectee === "3"}
          />
          <MobileRectangleOption
            img="./assets/mobile/affectee4.png"
            text="Locataire"
            onClick={() => {
              setAccomodationAffectee("4");
              localStorage.setItem("accomodationAffectee", "4");
            }}
            selected={accomodationAffectee === "4"}
          />
        </div>
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
          <div className="w-full flex items-center justify-start h-4 mb-4 bg-[#FCFFFE] rounded-full">
            <div
              className="h-3 bg-[#8DD9DE] rounded-full m-1 shadow-bar"
              style={{ width: "64%" }}
            ></div>
          </div>

          <form
            onSubmit={submitHandler}
            className="flex flex-col items-center flex-1"
          >
            <h1 className="font-semibold text-2xl text-[#1E1D4C] py-12">
              Dans ce logement, vous êtes:
            </h1>

            <div className="flex gap-6 py-12">
              <HeatEnergyItem
                icon={"./assets/affectee1.png"}
                text={"Propriétéaire occupant"}
                number={"1"}
                selected={accomodationAffectee === "1"}
                setSelected={setSelected}
                tooltip={false}
                // size={isMobile ? 'w-20 h-14' : 'w-14 h-20'}
              />
              <HeatEnergyItem
                icon={"./assets/affectee2.png"}
                text={"Propriétaire d’une résidence secondaire"}
                number={"2"}
                selected={accomodationAffectee === "2"}
                setSelected={setSelected}
                tooltip={false}
                // size={isMobile ? 'w-20 h-14' : 'w-20 h-20'}
              />
              <HeatEnergyItem
                icon={"./assets/affectee3.png"}
                text={"Propriétaire bailleur"}
                number={"3"}
                selected={accomodationAffectee === "3"}
                setSelected={setSelected}
                tooltip={false}
                // size={isMobile ? 'w-20 h-14' : 'w-20 h-20'}
              />
              <HeatEnergyItem
                icon={"./assets/affectee4.png"}
                text={"Locataire"}
                number={"4"}
                selected={accomodationAffectee === "4"}
                setSelected={setSelected}
                tooltip={false}
                // size={isMobile ? 'w-20 h-14' : 'w-16 h-24'}
              />
            </div>
            <ContinueButton state1={accomodationAffectee} state2={"NILL"} />
          </form>
        </div>
      </div>
    </>
  );
};

export default AskAccomodationAffectee;
