import React from "react";
import NumberInput from "../components/NumberInput";
import useCheckMobileScreen from "../util/useCheckMobileScreen";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { Arrow } from "./AskPropertyType";
import MobileLayout from "../layouts/MobileLayout";

const AskArea = () => {
  // const [area, setArea] = React.useState('');
  const [area, setArea] = React.useState(localStorage.getItem("area") || "");
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setArea(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("area", area);
    navigate("/electricbill");
  };
  const IDKHandler = () => {
    setArea("NILL");
    localStorage.setItem("area", "NILL");
    navigate("/electricbill");
  };
  const isMobile = useCheckMobileScreen();

  if (isMobile)
    return (
      <MobileLayout
        disabled={!area}
        progress="10%"
        question="Quelle est la surface de votre logement?"
        onSubmit={onSubmit}
      >
        <div className="mt-12">
          <NumberInput
            isMobile={isMobile}
            state={area}
            changeHandler={changeHandler}
            IDKHandler={IDKHandler}
            nextNav="/electricbill"
            label={"Surface en m2"}
            placeholder="Exemple: 60 m2"
            unit="m2"
          />
        </div>
      </MobileLayout>
    );

  return (
    <>
      <div className="flex flex-col h-screen ">
        <Navbar one />
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
              style={{ width: "10%" }}
            ></div>
          </div>

          <section className="flex flex-col items-center flex-1">
            <h1 className="font-semibold text-2xl text-[#1E1D4C] py-6">
              Quelle est la surface habitable de votre logement?
            </h1>

            <NumberInput
              isMobile={isMobile}
              state={area}
              changeHandler={changeHandler}
              onSubmit={onSubmit}
              IDKHandler={IDKHandler}
              nextNav="/electricbill"
              label={"Surface en m2"}
              placeholder="Exemple: 60 m2"
              unit="m2"
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default AskArea;
