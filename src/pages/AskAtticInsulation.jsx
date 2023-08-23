import React from "react";
import { useNavigate } from "react-router-dom";
import HeatEnergyItem from "../components/HeatEnergyItem";
import { generateURLstring } from "../util/generateURLstring";
import useCheckMobileScreen from "../util/useCheckMobileScreen";
import Navbar from "../components/Navbar";
import { Arrow } from "./AskPropertyType";
import MobileLayout from "../layouts/MobileLayout";
import MobileHeatEnergy from "../components/MobileHeatEnergy";
import ContinueButton from "../components/ContinueButton";

const AskAtticInsulation = () => {
  const isMobile = useCheckMobileScreen();
  const [atticInsulation, setAtticInsulation] = React.useState(
    localStorage.getItem("atticInsulation") || ""
  );
  // const [atticInsulation, setAtticInsulation] = React.useState('');

  const handleSelect = (number) => {
    setAtticInsulation(number);
    localStorage.setItem("atticInsulation", number);
  };
  const path = generateURLstring();
  const url = "/atticarea" + path.replace(path[0], "?");

  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (atticInsulation) {
      return navigate(url);
    }
  };

  // Check if heatingInstall option is present in localStorage
  const heatingInstall =
    JSON.parse(localStorage.getItem("heatingInstall")) || {};
  const heatInstall = Object.keys(heatingInstall).find(
    (key) => heatingInstall[key] === true
  );

  // Check if solarOption is present in localStorage
  const solarOption = parseInt(localStorage.getItem("solarOption"));

  // Define a mapping object for the image filenames when only basement is present
  const imageMappingsAttic = {
    1: "comblesAmenages.png",
    2: "comblesPerdus.png",
    default: "home3d.png",
  };

  // Define a mapping object for the image filenames when only heatInstall and basement are present
  const imageMappingsHeatInstallAttic = {
    "1-1": "PACIsoComblesAménagés.png",
    "1-2": "PoêleGranulésIsoComblesAménagés.png",
    "2-1": "PACIsoComblesPerdus.png",
    "2-2": "PoêleGranulésIsoComblesPerdus.png",
    "default-1": "comblesAmenages.png",
    "default-2": "comblesPerdus.png",
  };

  const imageMappingsSolarAttic = {
    "1-1": "SolarOption1comblesAmenages.png",
    "1-2": "SolarOption2comblesAmenages.png",
    "2-1": "SolarOption1comblesPerdus.png",
    "2-2": "SolarOption2comblesPerdus.png",
    "default-1": "comblesAmenages.png",
    "default-2": "comblesPerdus.png",
  };

  // Define a mapping object for the image filenames when both solarOption and heatInstall are present
  const imageMappingsAllThree = {
    "1-1-1": "SolarOption1PACcomblesPerdus.png",
    "1-1-2": "SolarOption1PoêleGranuléscomblesPerdus.png",
    "1-2-1": "SolarOption1PACIsoComblesAménagés.png",
    "1-2-2": "SolarOption1PoêleGranulésIsoComblesAménagés.png",

    "2-1-1": "SolarOption2PACcomblesPerdus.png",
    "2-1-2": "SolarOption2PoêleGranuléscomblesPerdus.png",
    "2-2-1": "SolarOption2PACIsoComblesAménagés.png",
    "2-2-2": "SolarOption2PoêleGranulésIsoComblesAménagés.png",
  };

  // Decide which imageMappings to use based on the presence of solarOption and heatInstall
  let imageMappings, imageKey;

  if (solarOption && heatInstall) {
    imageMappings = imageMappingsAllThree;
    imageKey = `${solarOption}-${atticInsulation}-${heatInstall}`;
  } else if (heatInstall) {
    imageMappings = imageMappingsHeatInstallAttic;
    imageKey = `${atticInsulation}-${heatInstall}`;
  } else if (solarOption) {
    imageMappings = imageMappingsSolarAttic;
    imageKey = `${atticInsulation}-${solarOption}`;
  } else {
    imageMappings = imageMappingsAttic;
    imageKey = atticInsulation;
  }

  const imageName = imageMappings[imageKey] || "home3d.png";

  if (isMobile)
    return (
      <MobileLayout
        disabled={!atticInsulation}
        progress="50%"
        question="L’isolation des combles concerne :"
        subText="Sélectioner jusqu’a N élément"
        onSubmit={submitHandler}
        house
        houseImg={"./assets/" + imageName}
      >
        <div className="grid grid-cols-1 gap-4">
          <MobileHeatEnergy
            icon={"./assets/mobile/insulate1.png"}
            text={"Combles aménagés"}
            number={"1"}
            selected={atticInsulation === 1}
            setSelected={() => handleSelect(1)}
          />
          <MobileHeatEnergy
            icon={"./assets/mobile/insulate2.png"}
            text={"Combles perdus"}
            number={"2"}
            selected={atticInsulation === 2}
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
              onSubmit={submitHandler}
              className="flex flex-col items-center flex-1 gap-12 py-12"
            >
              <h1 className="font-semibold text-2xl text-[#1E1D4C]">
                L’isolation des combles concerne :
              </h1>

              <div className="flex py-6 gap-14">
                <HeatEnergyItem
                  icon={"./assets/attic1.png"}
                  text={"Combles aménagés"}
                  number={"1"}
                  selected={atticInsulation === "1"}
                  setSelected={() => handleSelect("1")}
                  isMobile={isMobile}
                  hoverTitle={"Combles aménagés"}
                  hoverDescription={
                    "Isolation spécifique pour les combles aménagés afin d'améliorer le confort et l'efficacité énergétique."
                  }
                />
                <HeatEnergyItem
                  icon={"./assets/attic2.png"}
                  text={"Combles perdus"}
                  number={"2"}
                  selected={atticInsulation === "2"}
                  setSelected={() => handleSelect("2")}
                  isMobile={isMobile}
                  hoverTitle={"Combles perdus"}
                  hoverDescription={
                    "Isolation des combles non aménagés pour réduire les pertes de chaleur."
                  }
                />
              </div>
              <ContinueButton state1={atticInsulation} state2="NILL" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AskAtticInsulation;
