import React from "react";
import { useNavigate } from "react-router-dom";
import useCheckMobileScreen from "../util/useCheckMobileScreen";
import NumberInput from "../components/NumberInput";
import { Arrow } from "./AskPropertyType";
import Navbar from "../components/Navbar";
import MobileLayout from "../layouts/MobileLayout";

const AskElectricBill = () => {
  const isMobile = useCheckMobileScreen();
  // const [electricBill, setElectricBill] = React.useState('');
  const [electricBill, setElectricBill] = React.useState(
    localStorage.getItem("electricBill") || ""
  );
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setElectricBill(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("electricBill", electricBill);
    navigate("/heatenergy");
  };
  const IDKHandler = () => {
    setElectricBill("NILL");
    localStorage.setItem("electricBill", "NILL");
    navigate("/heatenergy");
  };

  if (isMobile)
    return (
      <MobileLayout
        disabled={!electricBill}
        progress="15%"
        question="Quelle est le montant de votre facture d’électricité?"
        onSubmit={onSubmit}
      >
        <div className="mt-12">
          <NumberInput
            isMobile={isMobile}
            state={electricBill}
            changeHandler={changeHandler}
            IDKHandler={IDKHandler}
            nextNav="/heatenergy"
            label={"Montant par mois"}
            placeholder="Exemple: 60 €"
            unit="€/mois"
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
              style={{ width: "15%" }}
            ></div>
          </div>

          <section className="flex flex-col items-center flex-1">
            <h1 className="font-semibold text-2xl text-[#1E1D4C] py-6">
              Quelle est le montant de votre facture d’électricité?
            </h1>

            <NumberInput
              isMobile={isMobile}
              state={electricBill}
              changeHandler={changeHandler}
              onSubmit={onSubmit}
              IDKHandler={IDKHandler}
              nextNav="/heatenergy"
              label={"Montant par mois"}
              placeholder="Exemple: 60 €"
              unit="€/mois"
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default AskElectricBill;
