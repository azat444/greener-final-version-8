import React from "react";
import NumberInput from "../components/NumberInput";
import { generateURLstring } from "../util/generateURLstring";
import useCheckMobileScreen from "../util/useCheckMobileScreen";

const AskBasementArea = () => {
  const isMobile = useCheckMobileScreen();

  const [basement, setBasement] = React.useState(
    localStorage.getItem("basement"),
  );

  const changeHandler = (e) => {
    setBasement(e.target.value);
    localStorage.setItem("basement", e.target.value);
  };

  return (
    <>
      <nav className="h-32 py-8 px-28 flex justify-center xl:block">
        <img src="./assets/logo.svg" alt="Greener Logo" />
      </nav>

      <NumberInput
        state={basement}
        changeHandler={changeHandler}
        backNav="/isolate"
        nextNav={generateURLstring()}
        text1={"Quelle est la surface de votre sous-sol"}
        text2={"?"}
        label={"Surface en m2"}
        isMobile={isMobile}
      />
    </>
  );
};

export default AskBasementArea;
