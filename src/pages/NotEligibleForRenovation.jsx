import React from "react";
import { Link } from "react-router-dom";
import useCheckMobileScreen from "../util/useCheckMobileScreen";

const NotEligibleForRenovation = () => {
  const isMobile = useCheckMobileScreen();

  return (
    <>
      <nav className="h-32 py-8 px-28 flex justify-center xl:block">
        <img src="./assets/logo.svg" alt="Greener Logo" />
      </nav>

      <section className="flex flex-col gap-4 xl:gap-8 items-center">
        <div className="flex items-center">
          <div className={`absolute ${isMobile ? "top-24 left-4" : "left-28"}`}>
            <Link to="/time">
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
                  : "mx-auto heading flex-1 text-center lg:text-5xl max-w-[70vw]"
              }
            >
              Oups... Votre projet n’est pas éligible aux aides à la rénovation
            </h1>
          </div>
        </div>

        <div className="flex flex-col gap-8 items-center mb-8">
          {isMobile ? (
            <h2
              className={`heading2 ${
                isMobile ? "!text-xl !leading-6 !px-3" : "max-w-[70vw]"
              }`}
            >
              Téléchargez{" "}
              <span className="inline-block align-middle relative top-1">
                <img src="/assets/greener.svg" alt="" />
              </span>{" "}
              pour pairrainer vos proches et gagner de l’argent
            </h2>
          ) : (
            <h2
              className={`heading2 ${
                isMobile ? "!text-xl !leading-6 !px-3" : "max-w-[70vw]"
              }`}
            >
              Télécharger l’application et soyez rémunerer en fonction des
              ecomoies que vous faites réalisé à votre entourage
            </h2>
          )}

          <div className="flex flex-col items-center justify-center gap-14 py-6">
            <img
              className={isMobile && "w-72 h-40"}
              src="/assets/3phones.webp"
              alt="Phone Screen"
            />
            <div className="flex gap-3">
              <img
                className={isMobile && "w-32 h-10"}
                src="/assets/playStore.webp"
                alt="Phone Screen"
              />
              <img
                className={isMobile && "w-28 h-10"}
                src="/assets/appStore.webp"
                alt="Phone Screen"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotEligibleForRenovation;
