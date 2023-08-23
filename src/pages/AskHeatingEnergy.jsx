import React from "react";
import { useNavigate } from "react-router-dom";
import HeatEnergyItem from "../components/HeatEnergyItem";
import useCheckMobileScreen from "../util/useCheckMobileScreen";
import { Arrow } from "./AskPropertyType";
import Navbar from "../components/Navbar";
import MobileLayout from "../layouts/MobileLayout";
import MobileHeatEnergy from "../components/MobileHeatEnergy";

const AskHeatingEnergy = () => {
  const isMobile = useCheckMobileScreen();
  // const [heatingEnergy, setHeatingEnergy] = React.useState({
  //   1: false,
  //   2: false,
  //   3: false,
  //   4: false,
  //   5: false,
  //   6: false,
  // });
  const [heatingEnergy, setHeatingEnergy] = React.useState(
    localStorage.getItem("heatingEnergy")
      ? JSON.parse(localStorage.getItem("heatingEnergy"))
      : {
          1: false,
          2: false,
          3: false,
          4: false,
          5: false,
          6: false,
        }
  );

  const setSelected = (number) => {
    setHeatingEnergy((prev) => ({
      ...prev,
      [number]: !prev[number],
    }));
  };

  React.useEffect(() => {
    localStorage.setItem("heatingEnergy", JSON.stringify(heatingEnergy));
  }, [heatingEnergy]);

  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    // generate URL string based on user selection
    let url = "";
    if (heatingEnergy["1"] === true) {
      if (url) url += "?oilequipment";
      else url += "/oilequipment";
    }
    if (heatingEnergy["2"] === true) {
      if (url) url += "?electricequipment";
      else url += "/electricequipment";
    }
    if (heatingEnergy["3"] === true) {
      if (url) url += "?gasequipment";
      else url += "/gasequipment";
    }
    if (heatingEnergy["4"] === true) {
      if (url) url += "?woodbill";
      else url += "/woodbill";
    }
    if (heatingEnergy["6"] === true) {
      if (url) url += "?coalbill";
      else url += "/coalbill";
    }
    if (heatingEnergy["5"] === true) {
      if (url) url += "";
      else url += "/goals";
    }

    navigate(url);
  };

  if (isMobile)
    return (
      <MobileLayout
        disabled={
          heatingEnergy === "" ||
          (heatingEnergy["1"] === false &&
            heatingEnergy["2"] === false &&
            heatingEnergy["3"] === false &&
            heatingEnergy["4"] === false &&
            heatingEnergy["5"] === false &&
            heatingEnergy["6"] === false)
        }
        progress="20%"
        question="Quelle est l’énergie de chauffage actuelle de votre logement?"
        onSubmit={submitHandler}
        house
      >
        <div className="grid grid-cols-2 gap-4">
          <MobileHeatEnergy
            icon={"./assets/mobile/heat1.png"}
            text={"Fioul"}
            number={"1"}
            selected={heatingEnergy["1"]}
            setSelected={setSelected}
          />
          <MobileHeatEnergy
            icon={"./assets/mobile/heat2.png"}
            text={"Electrique"}
            number={"2"}
            selected={heatingEnergy["2"]}
            setSelected={setSelected}
          />
          <MobileHeatEnergy
            icon={"./assets/mobile/heat3.png"}
            text={"Gaz"}
            number={"3"}
            selected={heatingEnergy["3"]}
            setSelected={setSelected}
          />
          <MobileHeatEnergy
            icon={"./assets/mobile/heat4.png"}
            text={"Bois"}
            number={"4"}
            selected={heatingEnergy["4"]}
            setSelected={setSelected}
          />
          <MobileHeatEnergy
            icon={"./assets/mobile/heat5.png"}
            text={"Pompe à chaleur"}
            number={"5"}
            selected={heatingEnergy["5"]}
            setSelected={setSelected}
          />
          <MobileHeatEnergy
            icon={"./assets/mobile/heat6.png"}
            text={"Charbon"}
            number={"6"}
            selected={heatingEnergy["6"]}
            setSelected={setSelected}
          />
        </div>
      </MobileLayout>
    );

  return (
    <>
      <div className="flex flex-col h-screen ">
        <Navbar one two />
        <div className="flex h-full">
          {/* LEFT */}
          <div className="w-[30%] bg-[#FCFFFE] h-full flex items-center justify-center shadow-2xl">
            <img src="/assets/solar-house-1.png" alt="" />
          </div>

          {/* RIGHT */}
          <div className="flex flex-col flex-1 w-full">
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
                style={{ width: "20%" }}
              ></div>
            </div>

            <form
              onSubmit={submitHandler}
              className="flex flex-col items-center flex-1 gap-4 justify-evenly"
            >
              <h1 className="font-semibold text-2xl text-[#1E1D4C]">
                Quelle est l’énergie de chauffage actuelle de votre logement ?
              </h1>

              <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
                <HeatEnergyItem
                  icon={"./assets/oil.png"}
                  text={"Chauffage au fioul"}
                  number={"1"}
                  selected={heatingEnergy["1"]}
                  setSelected={setSelected}
                  // size={isMobile ? 'w-20 h-14' : 'w-14 h-20'}
                  hoverTitle={"Chauffage au fioul"}
                  hoverDescription={
                    "Chauffage fonctionnant à partir de combustible fossile. Émissions de CO2 élevées. Alternative moins écologique."
                  }
                />
                <HeatEnergyItem
                  icon={"./assets/electric.png"}
                  text={"Chauffage électrique"}
                  number={"2"}
                  selected={heatingEnergy["2"]}
                  setSelected={setSelected}
                  hoverTitle={"Chauffage électrique"}
                  hoverDescription={
                    "Utilise l'électricité pour chauffer. Pratique, mais peut être coûteux et générer des émissions si l'électricité provient de sources non renouvelables."
                  }
                  // size={isMobile ? 'w-20 h-14' : 'w-20 h-20'}
                />
                <HeatEnergyItem
                  icon={"./assets/gas.png"}
                  text={"Chauffage au gaz"}
                  number={"3"}
                  selected={heatingEnergy["3"]}
                  setSelected={setSelected}
                  hoverTitle={"Chauffage au gaz"}
                  hoverDescription={
                    "Fonctionne au gaz naturel. Émissions de CO2 plus faibles que le fioul ou le charbon, mais pas une source d'énergie renouvelable."
                  }
                  // size={isMobile ? 'w-20 h-14' : 'w-20 h-20'}
                />
                <HeatEnergyItem
                  icon={"./assets/heat.png"}
                  text={"Chauffage au bois"}
                  number={"4"}
                  selected={heatingEnergy["4"]}
                  setSelected={setSelected}
                  // size={isMobile ? 'w-20 h-14' : 'w-16 h-24'}
                  hoverTitle={"Chauffage au bois"}
                  hoverDescription={
                    "Utilise des combustibles solides comme le bois. Renouvelable, mais nécessite un approvisionnement constant en bois et peut produire de la pollution atmosphérique."
                  }
                />
                <HeatEnergyItem
                  icon={"./assets/fan.png"}
                  text={"Pompe à chaleur"}
                  number={"5"}
                  selected={heatingEnergy["5"]}
                  setSelected={setSelected}
                  hoverTitle={"Pompe à chaleur"}
                  hoverDescription={
                    "Utilise l'énergie thermique présente dans l'air, le sol ou l'eau pour chauffer. Très efficace et respectueuse de l'environnement."
                  }
                  // size={isMobile ? 'w-20 h-14' : 'w-28 h-28'}
                />
                <HeatEnergyItem
                  icon={"./assets/carbon.png"}
                  text={"Chauffage au charbon"}
                  number={"6"}
                  selected={heatingEnergy["6"]}
                  setSelected={setSelected}
                  hoverTitle={"Chauffage au charbon"}
                  hoverDescription={
                    "Utilisation du charbon comme combustible. Fortes émissions de CO2 et impact environnemental négatif. "
                  }
                  // size={isMobile ? 'w-20 h-14' : 'w-28 h-20'}
                  // the page won't change it needs to
                />
              </div>

              <div
                className={`border ${
                  heatingEnergy === "" ||
                  (heatingEnergy["1"] === false &&
                    heatingEnergy["2"] === false &&
                    heatingEnergy["3"] === false &&
                    heatingEnergy["4"] === false &&
                    heatingEnergy["5"] === false &&
                    heatingEnergy["6"] === false)
                    ? "border-[#C8CCD8]"
                    : "border-[#18808A] hover:shadow-lg"
                } rounded-[40px] p-1 bg-[#FCFFFE] transition-all`}
              >
                <button
                  type="submit"
                  disabled={
                    heatingEnergy === "" ||
                    (heatingEnergy["1"] === false &&
                      heatingEnergy["2"] === false &&
                      heatingEnergy["3"] === false &&
                      heatingEnergy["4"] === false &&
                      heatingEnergy["5"] === false &&
                      heatingEnergy["6"] === false)
                  }
                  className="disabled:bg-[#C8CCD8] bg-[#18808A] text-uppercase rounded-[40px] text-xl font-semibold text-[#FCFFFE] py-4 px-16 cursor-pointer"
                >
                  CONTINUER
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AskHeatingEnergy;
