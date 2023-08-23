import React from "react";
import { useNavigate } from "react-router-dom";
import HeatEnergyItem from "../components/HeatEnergyItem";
import { Arrow } from "./AskPropertyType";
import Navbar from "../components/Navbar";
import useCheckMobileScreen from "../util/useCheckMobileScreen";
import MobileLayout from "../layouts/MobileLayout";
import MobileHeatEnergy from "../components/MobileHeatEnergy";
import ContinueButton from "../components/ContinueButton";

const AskSolarOption = () => {
  // const [solarOption, setsolarOption] = React.useState('');
  const [solarOption, setsolarOption] = React.useState(
    localStorage.getItem("solarOption") || ""
  );
  const isMobile = useCheckMobileScreen();

  // { 1: true, 2: false}
  // only one can be true at a time
  // extract the true one and return it
  const heatingInstall = JSON.parse(localStorage.getItem("heatingInstall")) || {
    1: false,
    2: false,
  };

  const heatInstall = Object.keys(heatingInstall).filter(
    (key) => heatingInstall[key] === true
  )[0];

  // Define a mapping object for the image filenames
  const imageMappings = {
    "1-1": "PACPanneauxSolairesPhotovoltaïques.png",
    "1-2": "PACSystemeSolaireCombine.png",
    "2-1": "PoêleGranulésPanneauxSolairesPhotovoltaïques.png",
    "2-2": "PoêleGranulésSystemeSolaireCombine.png",
    "default-1": "PanneauxSolairesPhotovoltaiques.png",
    "default-2": "SystèmeSolaireCombine.png",
  };

  // Create a key to fetch the correct image filename from the mapping object
  const imageKey = heatInstall
    ? `${heatInstall}-${solarOption}`
    : `default-${solarOption}`;

  const imageName = imageMappings[imageKey] ?? "home3d.png";

  const handleSelect = (number) => {
    setsolarOption(number);
    localStorage.setItem("solarOption", number);
  };

  let navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    navigate("/rooforientation");
  };

  if (isMobile)
    return (
      <MobileLayout
        disabled={solarOption === ""}
        progress="50%"
        question="Quel équipement solaire souhaitez-vous installer?"
        onSubmit={handleNext}
        house
        houseImg={`/assets/${imageName}`}
      >
        <div className="grid grid-cols-1 gap-4">
          <MobileHeatEnergy
            icon={"./assets/mobile/solar1.png"}
            text={"Panneaux solaires photovoltaïques"}
            number={"1"}
            selected={solarOption === 1}
            setSelected={() => handleSelect(1)}
          />
          <MobileHeatEnergy
            icon={"./assets/mobile/solar2.png"}
            text={"Système solaire combiné"}
            number={"2"}
            selected={solarOption === 2}
            setSelected={() => handleSelect(2)}
          />
        </div>
      </MobileLayout>
    );

  return (
    <>
      <div className="flex flex-col h-screen ">
        <Navbar one two three />
        <div className="flex h-full">
          {/* LEFT */}
          <div className="w-[30%] bg-[#FCFFFE] h-full flex items-center justify-center shadow-2xl">
            <img src={`/assets/${imageName}`} alt="" />
          </div>

          {/* RIGHT */}
          <div className="flex flex-col flex-1 w-full gap-4 px-16">
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
                style={{ width: "50%" }}
              ></div>
            </div>

            <form
              onSubmit={handleNext}
              className="flex flex-col items-center flex-1 gap-12 py-12"
            >
              <h1 className="font-semibold text-2xl text-[#1E1D4C]">
                Quel équipement solaire souhaitez-vous installer ?
              </h1>

              <div className="flex py-6 gap-14">
                <HeatEnergyItem
                  icon={"./assets/solar1.png"}
                  text={"Panneaux solaires photovoltaïques"}
                  number={"1"}
                  selected={solarOption === "1"}
                  setSelected={() => handleSelect("1")}
                  hoverTitle={"Panneaux photovoltaïques"}
                  hoverDescription={
                    "Convertissent l'énergie solaire en électricité pour alimenter le logement et réduire la dépendance aux sources d'énergie conventionnelles."
                  }
                />
                <HeatEnergyItem
                  icon={"./assets/solar2.png"}
                  text={"Sytème solaire combiné"}
                  number={"2"}
                  selected={solarOption === "2"}
                  setSelected={() => handleSelect("2")}
                  hoverTitle={"Système solaire combiné"}
                  hoverDescription={
                    "Utilise l'énergie solaire pour la production d'eau chaude sanitaire et le chauffage de l'habitation."
                  }
                />
              </div>
              <ContinueButton state1={solarOption} state2={"NILL"} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AskSolarOption;
