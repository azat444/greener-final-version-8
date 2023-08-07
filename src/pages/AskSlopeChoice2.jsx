import React from "react";
import { useNavigate } from "react-router-dom";
import SelectComp from "../components/SelectComp";
import useCheckMobileScreen from "../util/useCheckMobileScreen";
import Navbar from "../components/Navbar";
import { Arrow } from "./AskPropertyType";
import MobileLayout from "../layouts/MobileLayout";

const AskSlopeChoice2 = () => {
  const isMobile = useCheckMobileScreen();
  // const [slopeChoice2, setslopeChoice2] = React.useState('');
  const [slopeChoice2, setslopeChoice2] = React.useState(
    localStorage.getItem("slopeChoice2") || "",
  );

  const setSelected = (number) => {
    setslopeChoice2(number);
    localStorage.setItem("slopeChoice2", number);
  };

  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (slopeChoice2 !== "") {
      navigate("/slopeChoice");
    }
  };

  if (isMobile)
    return (
      <MobileLayout
        disabled={slopeChoice2 === ""}
        progress="50%"
        question="Quelle inclinaison correspond le plus à votre toit?"
        onSubmit={submitHandler}
        house
      >
        <div className="grid grid-cols-2 gap-4 ">
          <SelectComp
            selected={slopeChoice2 === "1"}
            setSelected={() => setSelected("1")}
            text="Plat - 0°"
            isMobile={isMobile}
            icon
          />
          <SelectComp
            selected={slopeChoice2 === "2"}
            setSelected={() => setSelected("2")}
            text="Méditerranéen - 15°"
            isMobile={isMobile}
            icon
          />
          <SelectComp
            selected={slopeChoice2 === "3"}
            setSelected={() => setSelected("3")}
            text={"Classique - 30°"}
            isMobile={isMobile}
            icon
          />
          <SelectComp
            selected={slopeChoice2 === "4"}
            setSelected={() => setSelected("4")}
            text={"Alsacien - 45°"}
            isMobile={isMobile}
            icon
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
                style={{ width: "50%" }}
              ></div>
            </div>

            <form
              onSubmit={submitHandler}
              className="flex flex-col items-center flex-1 gap-6 py-6"
            >
              <h1 className="font-semibold text-2xl text-[#1E1D4C] text-center">
                Quelle inclinaison correspond le plus à votre toit?
              </h1>

              <div className="grid w-3/4 grid-cols-2 gap-6 py-6">
                <SelectComp
                  selected={slopeChoice2 === "1"}
                  setSelected={() => setSelected("1")}
                  text="Toit Plat - 0°"
                  isMobile={isMobile}
                  icon
                />
                <SelectComp
                  selected={slopeChoice2 === "2"}
                  setSelected={() => setSelected("2")}
                  text="Toit Méditerranéen - 15°"
                  isMobile={isMobile}
                  icon
                />
                <SelectComp
                  selected={slopeChoice2 === "3"}
                  setSelected={() => setSelected("3")}
                  text={"Toit Classique - 30°"}
                  isMobile={isMobile}
                  icon
                />
                <SelectComp
                  selected={slopeChoice2 === "4"}
                  setSelected={() => setSelected("4")}
                  text={"Toit Alsacien - 45°"}
                  isMobile={isMobile}
                  icon
                />
              </div>
              <div
                className={`border ${
                  slopeChoice2 === "" ? "border-[#C8CCD8]" : "border-[#18808A]"
                } rounded-[40px] p-1 bg-[#FCFFFE]`}
              >
                <button
                  type="submit"
                  disabled={slopeChoice2 === ""}
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

export default AskSlopeChoice2;
