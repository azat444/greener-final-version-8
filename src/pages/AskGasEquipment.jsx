import React from "react";
import { useNavigate } from "react-router-dom";
import HeatEnergyItem from "../components/HeatEnergyItem";
import useCheckMobileScreen from "../util/useCheckMobileScreen";
import Navbar from "../components/Navbar";
import { Arrow } from "./AskPropertyType";
import MobileLayout from "../layouts/MobileLayout";
import MobileHeatEnergy from "../components/MobileHeatEnergy";
import ContinueButton from "../components/ContinueButton";

const AskGasEquipment = () => {
  const isMobile = useCheckMobileScreen();
  // const [gasEquipment, setGasEquipment] = React.useState('');
  const [gasEquipment, setGasEquipment] = React.useState(
    localStorage.getItem("gasEquipment") || ""
  );

  const setSelected = (number) => {
    setGasEquipment(number);
    localStorage.setItem("gasEquipment", number);
  };

  let navigate = useNavigate();

  // React.useEffect(() => {
  //   if (gasEquipment && !isMobile) {
  //     navigate('/gasbill' + window.location.search);
  //   } // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [gasEquipment]);

  const submitHandler = (e) => {
    e.preventDefault();

    navigate("/gasbill" + window.location.search);
  };

  if (isMobile)
    return (
      <MobileLayout
        disabled={gasEquipment === ""}
        progress="20%"
        question="Quel type d’équipement au gaz est installé?"
        onSubmit={submitHandler}
        house
      >
        <div className="grid grid-cols-2 gap-4">
          <MobileHeatEnergy
            icon={"./assets/mobile/gas1.png"}
            text={"Chaudière à condensation"}
            number={"1"}
            selected={gasEquipment === "1"}
            setSelected={setSelected}
          />
          <MobileHeatEnergy
            icon={"./assets/mobile/gas2.png"}
            text={"Autre qu'à condensation"}
            number={"2"}
            selected={gasEquipment === "2"}
            setSelected={setSelected}
          />
          <MobileHeatEnergy
            icon={"./assets/mobile/gas3.png"}
            text={"Radiateur gaz"}
            number={"3"}
            selected={gasEquipment === "3"}
            setSelected={setSelected}
          />
          <MobileHeatEnergy
            icon={"./assets/mobile/gas4.png"}
            text={"Poêle au gaz"}
            number={"4"}
            selected={gasEquipment === "4"}
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
          <div className="flex flex-col flex-1 w-full gap-4 px-16">
            <button onClick={() => navigate(-1)} className="flex items-center">
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
              className="flex flex-col items-center"
            >
              <h1 className="font-semibold text-2xl text-[#1E1D4C]">
                Quel type d'équipement au gaz est installé ?
              </h1>

              <div className="grid grid-cols-2 gap-6">
                <HeatEnergyItem
                  icon={"./assets/gas1.png"}
                  text={"Chaudière à condensation"}
                  number={"1"}
                  selected={gasEquipment === "1"}
                  setSelected={setSelected}
                  isMobile={isMobile}
                  mobileSize={"h-36 w-40"}
                  // size={isMobile ? 'w-20 h-14' : 'w-14 h-20'}
                  hoverTitle={"Chaudière à condensation"}
                  hoverDescription={
                    "Une chaudière éco-énergétique qui récupère la chaleur des gaz de combustion pour chauffer l'eau de manière plus efficace."
                  }
                />
                <HeatEnergyItem
                  icon={"./assets/gas2.png"}
                  text={"Autre qu’à condensation"}
                  number={"2"}
                  selected={gasEquipment === "2"}
                  setSelected={setSelected}
                  isMobile={isMobile}
                  mobileSize={"h-36 w-40"}
                  hoverTitle={"Chaudière autre qu'à condensation"}
                  hoverDescription={
                    "Une chaudière conventionnelle qui chauffe l'eau sans récupérer la chaleur des gaz de combustion."
                  }
                  // size={isMobile ? 'w-20 h-14' : 'w-20 h-20'}
                />
                <HeatEnergyItem
                  icon={"./assets/gas3.png"}
                  text={"Radiateur gaz"}
                  number={"3"}
                  selected={gasEquipment === "3"}
                  setSelected={setSelected}
                  isMobile={isMobile}
                  mobileSize={"h-36 w-40"}
                  hoverTitle={"Radiateur gaz"}
                  hoverDescription={
                    "Un dispositif de chauffage qui utilise du gaz pour produire de la chaleur et la diffuser dans la pièce."
                  }
                  // size={isMobile ? 'w-20 h-14' : 'w-20 h-20'}
                />
                <HeatEnergyItem
                  icon={"./assets/gas4.png"}
                  text={"Poêle au gaz"}
                  number={"4"}
                  selected={gasEquipment === "4"}
                  setSelected={setSelected}
                  isMobile={isMobile}
                  mobileSize={"h-36 w-40"}
                  hoverTitle={"Poêle au gaz"}
                  hoverDescription={
                    "Un appareil de chauffage autonome qui brûle du gaz pour produire de la chaleur et créer une ambiance chaleureuse dans une pièce."
                  }
                  // size={isMobile ? 'w-20 h-14' : 'w-20 h-20'}
                />
              </div>
              <div className="">
                <ContinueButton state1={gasEquipment} state2="NILL" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AskGasEquipment;
