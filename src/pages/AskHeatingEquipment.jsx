import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import HeatEnergyItem from "../components/HeatEnergyItem";
import useCheckMobileScreen from "../util/useCheckMobileScreen";

const AskHeatingEquipment = () => {
  const isMobile = useCheckMobileScreen();
  const [heatingEquipment, setHeatingEquipment] = React.useState("");
  // const [gasEquipment, setGasEquipment] = React.useState(
  //   localStorage.getItem("gasEquipment")
  // );

  const setSelected = (number) => {
    setHeatingEquipment(number);
    localStorage.setItem("heatingEquipment", number);
  };

  let navigate = useNavigate();
  React.useEffect(() => {
    if (heatingEquipment) {
      navigate("/solar");
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heatingEquipment]);

  return (
    <>
      <nav className="h-32 py-8 px-28 flex justify-center xl:block">
        <img src="./assets/logo.svg" alt="Greener Logo" />
      </nav>

      <section className="h-[85vh] flex flex-col gap-4 xl:gap-24 items-center">
        <div className="flex items-center">
          <div className={`absolute ${isMobile ? "top-24 left-4" : "left-28"}`}>
            <Link to="/heatenergy">
              <img
                className={isMobile && "w-7 h-7"}
                src="./assets/arrow.svg"
                alt="Back"
              />
            </Link>
          </div>
          <div className="flex-1 flex items-center gap-2">
            <h1
              className={
                isMobile
                  ? "inter text-2xl text-center font-bold leading-7 px-6 py-4"
                  : "mx-auto heading flex-1 text-center lg:text-5xl"
              }
            >
              Quel équipement de chauffage <br /> souhaitez-vous installer ?
            </h1>
          </div>
        </div>

        {/* Make a grid of 6 elements in 2 rows */}
        <div className="grid grid-cols-2 xl:grid-cols-5 gap-6 pb-20">
          <HeatEnergyItem
            icon={"./assets/heatEq1.svg"}
            text={"Pompe à chaleur"}
            number={"1"}
            selected={heatingEquipment === "1"}
            setSelected={setSelected}
            isMobile={isMobile}
            mobileSize={"h-36 w-40"}
            size={isMobile ? "w-20 h-14" : "w-14 h-20"}
          />
          <HeatEnergyItem
            icon={"./assets/heatEq2.svg"}
            text={"Chaudière"}
            number={"2"}
            selected={heatingEquipment === "2"}
            setSelected={setSelected}
            isMobile={isMobile}
            mobileSize={"h-36 w-40"}
            size={isMobile ? "w-20 h-14" : "w-14 h-20"}
          />
          <HeatEnergyItem
            icon={"./assets/heatEq3.svg"}
            text={"Poêle à bois"}
            number={"3"}
            selected={heatingEquipment === "3"}
            setSelected={setSelected}
            isMobile={isMobile}
            mobileSize={"h-36 w-40"}
            size={isMobile ? "w-20 h-14" : "w-14 h-20"}
          />
          <HeatEnergyItem
            icon={"./assets/heatEq4.svg"}
            text={"Insert cheminée"}
            number={"4"}
            selected={heatingEquipment === "4"}
            setSelected={setSelected}
            isMobile={isMobile}
            mobileSize={"h-36 w-40"}
            size={isMobile ? "w-20 h-14" : "w-14 h-20"}
          />
          <HeatEnergyItem
            icon={"./assets/heatEq5.svg"}
            text={"Radiateur électrique"}
            number={"5"}
            selected={heatingEquipment === "5"}
            setSelected={setSelected}
            isMobile={isMobile}
            mobileSize={"h-36 w-40"}
            size={isMobile ? "w-20 h-14" : "w-14 h-20"}
          />
        </div>

        {/* <Link to={getNextPath()}>
            <button disabled={!gasEquipment} className="button mt-6">
              CONTINUER
            </button>
          </Link> */}
      </section>
    </>
  );
};

export default AskHeatingEquipment;
