import React from "react";
import { useNavigate } from "react-router-dom";
import SelectComp from "../components/SelectComp";
import useCheckMobileScreen from "../util/useCheckMobileScreen";
import Navbar from "../components/Navbar";
import { Arrow } from "./AskPropertyType";
import MobileLayout from "../layouts/MobileLayout";
import MobileRectangleOption from "../components/MobileRectangleOption";
import ContinueButton from "../components/ContinueButton";

// create a function to add space after 2 digits in a number
function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
}

const AsktotalIncomeTax = () => {
  const isMobile = useCheckMobileScreen();
  // const [totalIncomeTax, settotalIncomeTax] = React.useState('');
  const [taxSlabs, setTaxSlabs] = React.useState([14879, 19074, 29148]);
  const [totalIncomeTax, settotalIncomeTax] = React.useState(
    localStorage.getItem("totalIncomeTax") || "",
  );

  const setSelected = (number) => {
    settotalIncomeTax(number);
    localStorage.setItem("totalIncomeTax", number);
  };

  let navigate = useNavigate();

  React.useEffect(() => {
    const people = localStorage.getItem("people");

    const baseSlab = [14879, 19074, 29148];
    const perPerson = [5012, 6651, 9744];

    if (people > 1) {
      const newSlab = baseSlab.map((item, index) => {
        return item + perPerson[index] * (people - 1);
      });
      setTaxSlabs(newSlab);
    }
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    if (totalIncomeTax) {
      return navigate("/name");
    }
  };

  if (isMobile)
    return (
      <MobileLayout
        disabled={!totalIncomeTax}
        progress="78%"
        question="A combien s’élève le revenu total de votre foyer fiscal par an ?"
        onSubmit={submitHandler}
      >
        <div className="flex flex-col gap-5 mt-12">
          <MobileRectangleOption
            text={"Inférieur à " + formatNumber(taxSlabs[0]) + " €"}
            onClick={() => setSelected("1")}
            selected={totalIncomeTax === "1"}
          />

          <MobileRectangleOption
            selected={totalIncomeTax === "2"}
            onClick={() => setSelected("2")}
            text={
              "Entre " +
              formatNumber(taxSlabs[0]) +
              " et " +
              formatNumber(taxSlabs[1]) +
              " €"
            }
          />
          <MobileRectangleOption
            selected={totalIncomeTax === "3"}
            onClick={() => setSelected("3")}
            text={
              "Entre " +
              formatNumber(taxSlabs[1]) +
              " et " +
              formatNumber(taxSlabs[2]) +
              " €"
            }
          />
          <MobileRectangleOption
            selected={totalIncomeTax === "4"}
            onClick={() => setSelected("4")}
            text={"Supérieur à " + formatNumber(taxSlabs[2]) + " €"}
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
                style={{ width: "78%" }}
              ></div>
            </div>

            <form
              onSubmit={submitHandler}
              className="flex flex-col items-center flex-1 gap-6 py-12"
            >
              <h1 className="font-semibold text-2xl text-[#1E1D4C] text-center">
                A combien s’élève le revenu total de votre foyer fiscal par an?
              </h1>

              <div className="grid w-3/4 grid-cols-2 gap-6 py-12">
                <SelectComp
                  selected={totalIncomeTax === "1"}
                  setSelected={() => setSelected("1")}
                  text={"Inférieur à " + formatNumber(taxSlabs[0]) + " €"}
                  isMobile={isMobile}
                />
                <SelectComp
                  selected={totalIncomeTax === "2"}
                  setSelected={() => setSelected("2")}
                  text={
                    "Entre " +
                    formatNumber(taxSlabs[0]) +
                    " et " +
                    formatNumber(taxSlabs[1]) +
                    " €"
                  }
                  isMobile={isMobile}
                />
                <SelectComp
                  selected={totalIncomeTax === "3"}
                  setSelected={() => setSelected("3")}
                  text={
                    "Entre " +
                    formatNumber(taxSlabs[1]) +
                    " et " +
                    formatNumber(taxSlabs[2]) +
                    " €"
                  }
                  isMobile={isMobile}
                />
                <SelectComp
                  selected={totalIncomeTax === "4"}
                  setSelected={() => setSelected("4")}
                  text={"Supérieur à " + formatNumber(taxSlabs[2]) + " €"}
                  isMobile={isMobile}
                />
              </div>
              <ContinueButton state1={totalIncomeTax} state2="NILL" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AsktotalIncomeTax;
