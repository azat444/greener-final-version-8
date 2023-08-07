import React from "react";
import useCheckMobileScreen from "../util/useCheckMobileScreen";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import MobileRectangleOption from "../components/MobileRectangleOption";
import MobileLayout from "../layouts/MobileLayout";

const AskPropertyType = () => {
  const [propertyType, setPropertyType] = React.useState("");

  const isMobile = useCheckMobileScreen();

  let navigate = useNavigate();

  React.useEffect(() => {
    // Clear all local storage
    localStorage.clear();

    // Set start time
    const startTime = new Date().toLocaleTimeString();
    localStorage.setItem("startTime", startTime);
  }, []);

  React.useEffect(() => {
    if (propertyType && !isMobile) {
      return navigate("/time");
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propertyType]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (propertyType && isMobile) {
      return navigate("/time");
    }
  };

  if (isMobile)
    return (
      <MobileLayout
        disabled={!propertyType}
        progress="1%"
        question="Les aides concernent-elles une maison ou un appartement?"
        onSubmit={submitHandler}
      >
        <MobileRectangleOption
          img="./assets/mobile/appartment1.svg"
          text="Une maison"
          onClick={() => {
            setPropertyType("maison");
            localStorage.setItem("propertyType", "maison");
          }}
          selected={propertyType === "maison"}
        />
        <MobileRectangleOption
          img="./assets/mobile/appartment2.svg"
          text="Un apprtement"
          onClick={() => {
            setPropertyType("appartement");
            localStorage.setItem("propertyType", "appartement");
          }}
          selected={propertyType === "appartement"}
        />
      </MobileLayout>
    );

  return (
    <div className="flex flex-col h-screen">
      <Navbar one />
      <div className="flex flex-col flex-1 w-full gap-4 px-16 pt-6 pb-4 ">
        <div className="flex items-center gap-3">
          <Arrow />
          <p className="text-xl text-[#1E1D4C] font-medium ">Retour</p>
        </div>
        <div className="w-full flex items-center justify-start h-4 mb-4 bg-[#FCFFFE] rounded-full">
          <div
            className="h-3 bg-[#8DD9DE] rounded-full m-1 shadow-bar"
            style={{ width: "1%" }}
          ></div>
        </div>

        <section className="flex flex-col items-center flex-1">
          <h1 className="font-semibold text-2xl text-[#1E1D4C] py-6">
            Votre projet concerne:
          </h1>
          <div className="flex items-center justify-center gap-6 xl:gap-28">
            <div
              className="py-5 px-3 flex bg-white flex-col items-center w-52 h-48 border border-[#C8CCD8] rounded-[30px] justify-center gap-2 cursor-pointer hover:border-[#18808A] hover:shadow-lg transition-all"
              onClick={() => {
                setPropertyType("maison");
                localStorage.setItem("propertyType", "maison");
              }}
            >
              <div className="w-[125px] h-[125px] flex items-center justify-center">
                <img src={"./assets/maison.png"} alt="Maison" />
              </div>
              <p className="text-[#999BA3] font-semibold text-xl">Maison</p>
            </div>
            <div
              className="py-5 px-3 flex bg-white flex-col items-center w-52 h-48 border border-[#C8CCD8] rounded-[30px] justify-center gap-2 cursor-pointer hover:border-[#18808A] hover:shadow-lg transition-all"
              onClick={() => {
                setPropertyType("appartement");
                localStorage.setItem("propertyType", "appartement");
              }}
            >
              <div className="w-[125px] h-[125px] flex items-center justify-center">
                <img src={"./assets/appartement.png"} alt="Appartement" />
              </div>
              <p className="text-[#999BA3] font-semibold text-xl">
                Appartement
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AskPropertyType;

export const Arrow = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.6705 18.7954C11.2312 19.2348 10.5188 19.2348 10.0795 18.7954L3.7045 12.4205C3.26517 11.9812 3.26517 11.2688 3.7045 10.8295L10.0795 4.4545C10.5188 4.01517 11.2312 4.01517 11.6705 4.4545C12.1098 4.89384 12.1098 5.60616 11.6705 6.04549L7.21599 10.5H18.375C18.9963 10.5 19.5 11.0037 19.5 11.625C19.5 12.2463 18.9963 12.75 18.375 12.75H7.21599L11.6705 17.2045C12.1098 17.6439 12.1098 18.3561 11.6705 18.7954Z"
        fill="#1E1D4C"
      />
    </svg>
  );
};
