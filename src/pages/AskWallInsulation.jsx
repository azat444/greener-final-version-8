import React from "react";
import { useNavigate } from "react-router-dom";
import HeatEnergyItem from "../components/HeatEnergyItem";
import { Arrow } from "./AskPropertyType";
import Navbar from "../components/Navbar";
import MobileLayout from "../layouts/MobileLayout";
import useCheckMobileScreen from "../util/useCheckMobileScreen";
import MobileHeatEnergy from "../components/MobileHeatEnergy";
import ContinueButton from "../components/ContinueButton";

const AskwallInsulation = () => {
  // const [wallInsulation, setwallInsulation] = React.useState('');
  const isMobile = useCheckMobileScreen();
  const [wallInsulation, setwallInsulation] = React.useState(
    localStorage.getItem("wallInsulation") || ""
  );

  const handleSelect = (number) => {
    setwallInsulation(number);
    localStorage.setItem("wallInsulation", number);
  };

  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (wallInsulation) {
      return navigate("/wallArea");
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
    1: "isoInterieurs.png",
    2: "IsoExterieurs.png",
    default: "home3d.png",
  };

  // Define a mapping object for the image filenames when only heatInstall and basement are present
  const imageMappingsHeatInstallWall = {
    "1-1": "PACIsoMursIntérieurs.png",
    "1-2": "PoêleGranulésIsoMursIntérieurs.png",
    "2-1": "PACIsoMursExterieurs.png",
    "2-2": "PoêleGranulésIsoMursExterieurs.png",
    "default-1": "isoInterieurs.png",
    "default-2": "IsoExterieurs.png",
  };

  const imageMappingsSolarWall = {
    "1-1": "SolarOption1isoInterieurs.png",
    "1-2": "SolarOption2isoInterieurs.png",
    "2-1": "SolarOption1IsoExterieurs.png",
    "2-2": "SolarOption2IsoExterieurs.png",
    "default-1": "isoInterieurs.png",
    "default-2": "IsoExterieurs.png",
  };

  // Define a mapping object for the image filenames when both solarOption and heatInstall are present
  const imageMappingsAllThree = {
    "1-1-1": "SolarOption1PACisoInterieurs.png",
    "1-1-2": "SolarOption1PoêleGranulésisoInterieurs.png",
    "1-2-1": "SolarOption1PACIsoExterieurs.png",
    "1-2-2": "SolarOption1PoêleGranulésIsoExterieurs.png",
    "2-1-1": "SolarOption2PACisoInterieurs.png",
    "2-1-2": "SolarOption2PoêleGranulésisoInterieurs.png",
    "2-2-1": "SolarOption2PACIsoExterieurs.png",
    "2-2-2": "SolarOption2PoêleGranulésIsoExterieurs.png",
  };

  // Decide which imageMappings to use based on the presence of solarOption and heatInstall
  let imageMappings, imageKey;

  if (solarOption && heatInstall) {
    imageMappings = imageMappingsAllThree;
    imageKey = `${solarOption}-${wallInsulation}-${heatInstall}`;
  } else if (heatInstall) {
    imageMappings = imageMappingsHeatInstallWall;
    imageKey = `${wallInsulation}-${heatInstall}`;
  } else if (solarOption) {
    imageMappings = imageMappingsSolarWall;
    imageKey = `${wallInsulation}-${solarOption}`;
  } else {
    imageMappings = imageMappingsAttic;
    imageKey = wallInsulation;
  }

  // Create a key to fetch the correct image filename from the mapping object
  // const imageKey = heatInstall ? `${basement}-${heatInstall}` : basement;

  const imageName = imageMappings[imageKey] || "home3d.png";
  if (isMobile)
    return (
      <MobileLayout
        disabled={!wallInsulation}
        progress="50%"
        question="De quelle façon souhaitez vous faire isoler vos murs ?"
        subText="Sélectioner jusqu’a N élément"
        onSubmit={submitHandler}
        house
        houseImg={`./assets/${imageName}`}
      >
        <div className="grid grid-cols-1 gap-4">
          <MobileHeatEnergy
            icon={"./assets/mobile/wall1.png"}
            text={"Intérieurs"}
            number={"1"}
            selected={wallInsulation === 1}
            setSelected={() => handleSelect(1)}
          />
          <MobileHeatEnergy
            icon={"./assets/mobile/wall2.png"}
            text={"Extérieur"}
            number={"2"}
            selected={wallInsulation === 2}
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
                style={{ width: "50%" }}
              ></div>
            </div>

            <form
              onSubmit={submitHandler}
              className="flex flex-col items-center flex-1 gap-12 py-12"
            >
              <h1 className="font-semibold text-2xl text-[#1E1D4C]">
                De quelle façon souhaitez vous faire isoler vos murs ?
              </h1>

              <div className="flex py-6 gap-14">
                <HeatEnergyItem
                  icon={"./assets/wall1.png"}
                  text={"Intérieurs"}
                  number={"1"}
                  selected={wallInsulation === "1"}
                  setSelected={() => handleSelect("1")}
                  hoverTitle={"Murs extérieurs"}
                  hoverDescription={
                    "Isolation des murs extérieurs du bâtiment pour améliorer l'efficacité énergétique."
                  }
                />
                <HeatEnergyItem
                  icon={"./assets/wall2.png"}
                  text={"Extérieur"}
                  number={"2"}
                  selected={wallInsulation === "2"}
                  setSelected={() => handleSelect("2")}
                  hoverTitle={"Murs intérieurs"}
                  hoverDescription={
                    "Isolation des murs intérieurs pour améliorer le confort acoustique et thermique."
                  }
                />
              </div>
              <ContinueButton state1={wallInsulation} state2={"NILL"} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AskwallInsulation;
