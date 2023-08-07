import React from "react";
import NumberInput from "../components/NumberInput";
import { generateURLstring } from "../util/generateURLstring";
import useCheckMobileScreen from "../util/useCheckMobileScreen";

const AskcrawlSpaceArea = () => {
  const isMobile = useCheckMobileScreen();
  const [crawlSpace, setcrawlSpace] = React.useState(
    localStorage.getItem("crawlSpace"),
  );

  const changeHandler = (e) => {
    setcrawlSpace(e.target.value);
    localStorage.setItem("crawlSpace", e.target.value);
  };

  return (
    <>
      <nav className="h-32 py-8 px-28 flex justify-center xl:block">
        <img src="./assets/logo.svg" alt="Greener Logo" />
      </nav>

      <NumberInput
        isMobile={isMobile}
        state={crawlSpace}
        changeHandler={changeHandler}
        backNav="/isolate"
        nextNav={generateURLstring()}
        text1={"Quelle est la surface de votre vide"}
        text2={"sanitaire ?"}
        label={"Surface en m2"}
      />
    </>
  );
};

export default AskcrawlSpaceArea;
