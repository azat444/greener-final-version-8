import React from "react";
import { useNavigate } from "react-router-dom";
import useCheckMobileScreen from "../util/useCheckMobileScreen";
import { Arrow } from "./AskPropertyType";
import Navbar from "../components/Navbar";
import DoubleNumberInput from "../components/DoubleNumberInput";
import MobileLayout from "../layouts/MobileLayout";
import NumberInput from "../components/NumberInput";

const AskTelephone = () => {
  const isMobile = useCheckMobileScreen();
  const navigate = useNavigate();

  // const [telephone, settelephone] = React.useState('');
  // const [mailAddress, setmailAddress] = React.useState('');

  const [telephone, settelephone] = React.useState(
    localStorage.getItem("telephone") || "",
  );
  const [mailAddress, setmailAddress] = React.useState(
    localStorage.getItem("mailAddress") || "",
  );

  const onSubmit = (e) => {
    e.preventDefault();
    if (telephone !== "" && mailAddress !== "") {
      localStorage.setItem("telephone", telephone);
      localStorage.setItem("mailAddress", mailAddress);
      navigate("/accomodationaffectee");
    }
  };

  if (isMobile)
    return (
      <MobileLayout
        disabled={telephone === "" || mailAddress === ""}
        progress="94%"
        question="Contacts"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-6 mt-12">
          <NumberInput
            isMobile={isMobile}
            state={telephone}
            changeHandler={(e) => settelephone(e.target.value)}
            // IDKHandler={IDKHandler1}
            type={"number"}
            nextNav="/heatenergy"
            label={"Téléphone"}
          />
          <NumberInput
            isMobile={isMobile}
            state={mailAddress}
            type={"email"}
            changeHandler={(e) => setmailAddress(e.target.value)}
            // IDKHandler={IDKHandler2}
            nextNav="/heatenergy"
            label={"Adresse mail"}
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
                style={{ width: "94%" }}
              ></div>
            </div>

            <section className="flex flex-col items-center flex-1 gap-12 py-12">
              <h1 className="font-semibold text-2xl text-[#1E1D4C]">
                Comment vous appelez-vous ?
              </h1>

              <div className="w-full py-6">
                <DoubleNumberInput
                  isMobile={isMobile}
                  state1={telephone}
                  state2={mailAddress}
                  type1="number"
                  type2="email"
                  changeHandler1={(e) => settelephone(e.target.value)}
                  changeHandler2={(e) => setmailAddress(e.target.value)}
                  onSubmit={onSubmit}
                  nextNav="/electricbill"
                  label1={"Téléphone"}
                  label2={"Adresse mail"}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default AskTelephone;
