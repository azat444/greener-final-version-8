import React from "react";
import { useNavigate } from "react-router-dom";
import useCheckMobileScreen from "../util/useCheckMobileScreen";
import { Arrow } from "./AskPropertyType";
import Navbar from "../components/Navbar";
import DoubleNumberInput from "../components/DoubleNumberInput";
import NumberInput from "../components/NumberInput";
import MobileLayout from "../layouts/MobileLayout";

const AskName = () => {
  const isMobile = useCheckMobileScreen();
  const navigate = useNavigate();

  // const [firstName, setfirstName] = React.useState('');
  // const [lastName, setLastname] = React.useState('');

  const [firstName, setfirstName] = React.useState(
    localStorage.getItem("firstName") || "",
  );
  const [lastName, setLastname] = React.useState(
    localStorage.getItem("lastName") || "",
  );

  const onSubmit = (e) => {
    e.preventDefault();
    if (firstName !== "" && lastName !== "") {
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      navigate("/appointment");
    }
  };

  if (isMobile)
    return (
      <MobileLayout
        disabled={firstName === "" || lastName === ""}
        progress="85%"
        question="Quel est votre nom?"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-6 mt-12">
          <NumberInput
            isMobile={isMobile}
            state={firstName}
            changeHandler={(e) => setfirstName(e.target.value)}
            // IDKHandler={IDKHandler1}
            type={"string"}
            nextNav="/heatenergy"
            label={"Prénom"}
          />
          <NumberInput
            isMobile={isMobile}
            state={lastName}
            type={"string"}
            changeHandler={(e) => setLastname(e.target.value)}
            // IDKHandler={IDKHandler2}
            nextNav="/heatenergy"
            label={"Nom"}
          />
        </div>
      </MobileLayout>
    );

  return (
    <>
      <div className="flex flex-col h-screen ">
        <Navbar one two three four />
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
                style={{ width: "85%" }}
              ></div>
            </div>

            <section className="flex flex-col items-center flex-1 gap-12 py-12">
              <h1 className="font-semibold text-2xl text-[#1E1D4C]">
                Comment vous appelez-vous ?
              </h1>

              <div className="w-full py-6">
                <DoubleNumberInput
                  isMobile={isMobile}
                  state1={firstName}
                  state2={lastName}
                  type1="string"
                  type2="string"
                  changeHandler1={(e) => setfirstName(e.target.value)}
                  changeHandler2={(e) => setLastname(e.target.value)}
                  onSubmit={onSubmit}
                  nextNav="/electricbill"
                  label1={"Prénom"}
                  label2={"Nom"}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default AskName;
