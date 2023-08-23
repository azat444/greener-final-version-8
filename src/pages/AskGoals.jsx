import React from "react";
import { Link, useNavigate } from "react-router-dom";
import GoalItem from "../components/GoalItem";
import useCheckMobileScreen from "../util/useCheckMobileScreen";
import { Arrow } from "./AskPropertyType";
import Navbar from "../components/Navbar";
import MobileLayout from "../layouts/MobileLayout";

const AskGoals = () => {
  const [goals, setGoals] = React.useState(
    JSON.parse(localStorage.getItem("goals")) || {
      goal1: false,
      goal2: false,
      goal3: false,
    }
  );
  const isMobile = useCheckMobileScreen();
  const navigate = useNavigate();

  const [url, setUrl] = React.useState("");

  React.useEffect(() => {
    if (goals.goal2) {
      setUrl(() => "/heatinstall");
      return;
    }
    if (goals.goal3) {
      setUrl(() => "/solar");
      return;
    }
    if (goals.goal1) {
      setUrl(() => "/isolate");
      return;
    }
    setUrl(() => "/goals");
  }, [goals]);

  // React.useEffect(() => {
  //   const goalsFromLocalStorage = JSON.parse(localStorage.getItem("goals"));
  //   if (goalsFromLocalStorage) {
  //     setGoals(goalsFromLocalStorage);
  //   }
  // }, []);

  const handleSelect = (number) => {
    setGoals((prev) => ({
      ...goals,
      [`goal${number}`]: !goals[`goal${number}`],
    }));
  };

  React.useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
    localStorage.removeItem("heatingInstall");
  }, [goals]);

  const submitHandler = () => {
    navigate(url);
  };

  if (isMobile)
    return (
      <MobileLayout
        disabled={
          goals.goal1 === false &&
          goals.goal2 === false &&
          goals.goal3 === false
        }
        progress="30%"
        question="Quel sont vos objectifs?"
        onSubmit={submitHandler}
      >
        <div className="flex flex-col gap-5 mt-12">
          <GoalItem
            icon={"./assets/mobile/goal1.png"}
            heading={"Je souhaite isoler mon logement"}
            text={"Eviter les déperditions"}
            selected={goals.goal1}
            setGoal={() => handleSelect(1)}
            number={"1"}
            isMobile={isMobile}
          />
          <GoalItem
            icon={"./assets/mobile/goal2.png"}
            heading={"Changer mon mode de chauffage"}
            text={"Réduire le prix de mes factures"}
            selected={goals.goal2}
            setGoal={() => handleSelect(2)}
            number={"2"}
            isMobile={isMobile}
          />
          <GoalItem
            icon={"./assets/mobile/goal3.png"}
            heading={"Passez au solaire"}
            text={"Devenir autonome"}
            selected={goals.goal3}
            setGoal={() => handleSelect(3)}
            number={"3"}
            isMobile={isMobile}
          />
        </div>
      </MobileLayout>
    );

  return (
    <>
      <div className="flex flex-col h-screen ">
        <Navbar one two three />
        <div className="flex flex-col flex-1 w-full gap-4 px-16">
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
              style={{ width: "30%" }}
            ></div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <h1 className="font-semibold text-2xl text-[#1E1D4C]">
              Quels sont vos objectifs ?
            </h1>

            <GoalItem
              icon={"./assets/goal1.png"}
              heading={"Je souhaite isoler mon logement"}
              text={"Eviter les déperditions"}
              selected={goals.goal1}
              setGoal={() => handleSelect(1)}
              number={"1"}
              isMobile={isMobile}
              hoverTitle={"Je souhaite isoler mon logement"}
              hoverDescription={
                "Améliorez l'isolation thermique de votre logement pour réduire les pertes de chaleur et les besoins de chauffage, ce qui peut entraîner des économies d'énergie et une meilleure efficacité."
              }
            />
            <GoalItem
              icon={"./assets/goal2.png"}
              heading={"Changer mon mode de chauffage"}
              text={"Réduire le prix de mes factures"}
              selected={goals.goal2}
              setGoal={() => handleSelect(2)}
              number={"2"}
              isMobile={isMobile}
              hoverTitle={"Changer mon mode de chauffage"}
              hoverDescription={
                "Passer à un système de chauffage plus écologique et efficace pour réduire les émissions de CO2 et les coûts énergétiques."
              }
            />
            <GoalItem
              icon={"./assets/goal3.png"}
              heading={"Passez au solaire"}
              text={"Devenir autonome"}
              selected={goals.goal3}
              setGoal={() => handleSelect(3)}
              number={"3"}
              isMobile={isMobile}
              hoverTitle={"Passez au solaire"}
              hoverDescription={
                "Aadopter une source d'énergie solaire pour réduire la dépendance aux combustibles fossiles et générer de l'énergie renouvelable."
              }
            />

            <Link to={url}>
              <div
                className={`border ${
                  goals.goal1 === false &&
                  goals.goal2 === false &&
                  goals.goal3 === false
                    ? "border-[#C8CCD8]"
                    : "border-[#18808A]"
                } rounded-[40px] p-1 bg-[#FCFFFE]`}
              >
                <button
                  type="submit"
                  disabled={
                    goals.goal1 === false &&
                    goals.goal2 === false &&
                    goals.goal3 === false
                  }
                  className="disabled:bg-[#C8CCD8] bg-[#18808A] text-uppercase rounded-[40px] text-xl font-semibold text-[#FCFFFE] py-4 px-16 cursor-pointer"
                >
                  CONTINUER
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AskGoals;
