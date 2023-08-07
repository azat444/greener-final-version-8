import React from "react";
import { useNavigate } from "react-router-dom";
import HeatEnergyItem from "../components/HeatEnergyItem";
import useCheckMobileScreen from "../util/useCheckMobileScreen";
import { Arrow } from "./AskPropertyType";
import Navbar from "../components/Navbar";
import MobileLayout from "../layouts/MobileLayout";
import MobileHeatEnergy from "../components/MobileHeatEnergy";
import ContinueButton from "../components/ContinueButton";

const AskOilEquipment = () => {
  const isMobile = useCheckMobileScreen();
  // const [oilEquipment, setOilEquipment] = React.useState('');
  const [oilEquipment, setOilEquipment] = React.useState(
    localStorage.getItem("oilEquipment") || "",
  );

  const setSelected = (number) => {
    setOilEquipment(number);
    localStorage.setItem("oilEquipment", number);
  };
  let navigate = useNavigate();

  // React.useEffect(() => {
  //   if (oilEquipment && !isMobile) {
  //     navigate('/fuelbill' + window.location.search);
  //   } // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [oilEquipment]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (oilEquipment) {
      navigate("/fuelbill" + window.location.search);
    }
  };

  if (isMobile)
    return (
      <MobileLayout
        disabled={!oilEquipment}
        progress="20%"
        question="Quel type d’équipement au fioul est installé?"
        onSubmit={submitHandler}
        house
      >
        <div className="grid grid-cols-1 gap-4">
          <MobileHeatEnergy
            icon={"./assets/mobile/oil1.png"}
            text={"Chaudière à condensation"}
            number={"1"}
            selected={oilEquipment === "1"}
            setSelected={setSelected}
          />
          <MobileHeatEnergy
            icon={"./assets/mobile/oil2.png"}
            text={"Chaudière classique"}
            number={"2"}
            selected={oilEquipment === "2"}
            setSelected={setSelected}
          />
          <MobileHeatEnergy
            icon={"./assets/mobile/oil3.png"}
            text={"Poêle"}
            number={"3"}
            selected={oilEquipment === "3"}
            setSelected={setSelected}
          />
        </div>
      </MobileLayout>
    );

  return (
    <>
      <div className="flex flex-col h-screen ">
        <Navbar one two />{" "}
        <div className="flex h-full">
          {/* LEFT */}
          <div className="w-[30%] bg-[#FCFFFE] h-full flex items-center justify-center shadow-2xl">
            <img src="/assets/solar-house-1.png" alt="" />
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
                style={{ width: "20%" }}
              ></div>
            </div>

            <form
              onSubmit={submitHandler}
              className="flex flex-col items-center gap-6"
            >
              <h1 className="font-semibold text-2xl text-[#1E1D4C] py-6">
                Quel type d'équipement au fioul est installé ?
              </h1>

              {/* Make a grid of 6 elements in 2 rows */}
              <div className="grid flex-1 grid-cols-2 gap-6 lg:grid-cols-3 w-">
                <HeatEnergyItem
                  icon={"./assets/oil1.png"}
                  text={"Chaudière à condensation "}
                  number={"1"}
                  selected={oilEquipment === "1"}
                  setSelected={setSelected}
                  isMobile={isMobile}
                  mobileSize={"h-36 w-40"}
                  hoverTitle={"Chaudière à condensation"}
                  hoverDescription={
                    "Une chaudière à haut rendement qui récupère la chaleur des fumées. Plus économe en énergie."
                  }
                  // size={isMobile ? 'w-20 h-14' : 'w-14 h-20'}
                />
                <HeatEnergyItem
                  icon={"./assets/oil2.png"}
                  text={"Chaudière classique"}
                  number={"2"}
                  selected={oilEquipment === "2"}
                  setSelected={setSelected}
                  isMobile={isMobile}
                  mobileSize={"h-36 w-40"}
                  hoverTitle={"Chaudière classique"}
                  hoverDescription={
                    "Une chaudière conventionnelle qui brûle du combustible pour produire de la chaleur. Moins efficace que les chaudières à condensation."
                  }
                  // size={isMobile ? 'w-20 h-14' : 'w-20 h-20'}
                />
                <HeatEnergyItem
                  icon={"./assets/oil3.png"}
                  text={"Poêle"}
                  number={"3"}
                  selected={oilEquipment === "3"}
                  setSelected={setSelected}
                  isMobile={isMobile}
                  mobileSize={"h-36 w-40"}
                  hoverTitle={"Poêle"}
                  hoverDescription={
                    "Un appareil de chauffage indépendant qui brûle des combustibles solides pour produire de la chaleur. Chaudière électrique : Une chaudière qui utilise l'électricité pour chauffer l'eau. Dépend de sources d'électricité renouvelables pour être écologique."
                  }
                  // size={isMobile ? 'w-20 h-14' : 'w-20 h-20'}
                />
              </div>
              <div className="my-12">
                <ContinueButton state1={oilEquipment} state2="NILL" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AskOilEquipment;
