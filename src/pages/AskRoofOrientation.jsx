import React from "react";
import { useNavigate } from "react-router-dom";
import SelectComp from "../components/SelectComp";
import useCheckMobileScreen from "../util/useCheckMobileScreen";
import Navbar from "../components/Navbar";
import { Arrow } from "./AskPropertyType";
import MobileLayout from "../layouts/MobileLayout";

const AskRoofOrientation = () => {
  const isMobile = useCheckMobileScreen();
  // const [roofOrientation, setRoofOrientation] = React.useState('');
  const [roofOrientation, setRoofOrientation] = React.useState(
    localStorage.getItem("roofOrientation") || ""
  );

  const setSelected = (number) => {
    setRoofOrientation(number);
    localStorage.setItem("roofOrientation", number);
  };

  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (roofOrientation !== "") {
      navigate("/roofarea");
    }
  };

  if (isMobile)
    return (
      <MobileLayout
        disabled={roofOrientation === ""}
        progress="50%"
        question="Quelle est l’orientation du pan de toiture où vous souhaitez installer vos panneaux photovoltaïques?"
        onSubmit={submitHandler}
        house
      >
        <div className="grid grid-cols-2 gap-4 ">
          <SelectComp
            selected={roofOrientation === "1"}
            setSelected={() => setSelected("1")}
            text="Est"
            isMobile={isMobile}
            icon
          />
          <SelectComp
            selected={roofOrientation === "2"}
            setSelected={() => setSelected("2")}
            text={"Sud-Est"}
            isMobile={isMobile}
            icon
          />
          <SelectComp
            selected={roofOrientation === "3"}
            setSelected={() => setSelected("3")}
            text="Sud"
            isMobile={isMobile}
            icon
          />
          <SelectComp
            selected={roofOrientation === "4"}
            setSelected={() => setSelected("4")}
            text={"Sud-Ouest"}
            isMobile={isMobile}
            icon
          />
          <div className="w-1/2 col-span-2 mx-auto">
            <SelectComp
              selected={roofOrientation === "5"}
              setSelected={() => setSelected("5")}
              text={"Ouest"}
              isMobile={isMobile}
              icon
            />
          </div>
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
            <img src="/assets/solar-house-1.png" alt="" />
          </div>

          {/* RIGHT */}
          <div className="flex flex-col flex-1 w-full gap-4 px-16 pt-6">
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
              className="flex flex-col items-center flex-1 gap-6 py-6"
            >
              <h1 className="font-semibold text-2xl text-[#1E1D4C] text-center">
                Quelle est l'orientation du pan de toiture où vous souhaitez
                installer vos panneaux photovoltaïques ?
              </h1>

              <div className="grid w-3/4 grid-cols-2 gap-6 py-6">
                <SelectComp
                  selected={roofOrientation === "1"}
                  setSelected={() => setSelected("1")}
                  text="Est"
                  isMobile={isMobile}
                  icon
                />
                <SelectComp
                  selected={roofOrientation === "2"}
                  setSelected={() => setSelected("2")}
                  text={"Sud-Est"}
                  isMobile={isMobile}
                  icon
                />
                <SelectComp
                  selected={roofOrientation === "3"}
                  setSelected={() => setSelected("3")}
                  text="Sud"
                  isMobile={isMobile}
                  icon
                />
                <SelectComp
                  selected={roofOrientation === "4"}
                  setSelected={() => setSelected("4")}
                  text={"Sud-Ouest"}
                  isMobile={isMobile}
                  icon
                />
                <SelectComp
                  selected={roofOrientation === "5"}
                  setSelected={() => setSelected("5")}
                  text={"Ouest"}
                  isMobile={isMobile}
                  icon
                  expand
                />
              </div>
              <div
                className={`border ${
                  roofOrientation === ""
                    ? "border-[#C8CCD8]"
                    : "border-[#18808A]"
                } rounded-[40px] p-1 bg-[#FCFFFE]`}
              >
                <button
                  type="submit"
                  disabled={roofOrientation === ""}
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

export default AskRoofOrientation;
