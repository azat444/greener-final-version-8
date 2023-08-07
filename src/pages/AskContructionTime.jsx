import React from "react";
import { useNavigate } from "react-router-dom";
import useCheckMobileScreen from "../util/useCheckMobileScreen";
import Navbar from "../components/Navbar";
import { Arrow } from "./AskPropertyType";
import MobileLayout from "../layouts/MobileLayout";
import MobileRectangleOption from "../components/MobileRectangleOption";
import ContinueButton from "../components/ContinueButton";

export const CalenderIcon = () => {
  return (
    <svg
      width="125"
      height="125"
      viewBox="0 0 125 125"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.2285 25.6841C11.2285 22.5214 13.7924 19.9575 16.9551 19.9575H103.273C106.436 19.9575 109 22.5214 109 25.6841V34.5391H11.2285V25.6841Z"
        fill="#18808A"
      />
      <path
        d="M36.3626 50.4463H28.1758V58.5953H36.3626V50.4463Z"
        fill="#18808A"
      />
      <path
        d="M52.0052 50.4463H43.8184V58.5953H52.0052V50.4463Z"
        fill="#18808A"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M80.5807 52.8326H77.452V56.0141H80.5807V52.8326ZM83.7094 57.6048C83.7094 58.4829 83.0086 59.1955 82.1451 59.1955H75.8877C75.0242 59.1955 74.3234 58.4829 74.3234 57.6048V51.2419C74.3234 50.3638 75.0242 49.6512 75.8877 49.6512H82.1451C83.0086 49.6512 83.7094 50.3638 83.7094 51.2419V57.6048ZM49.2939 84.6471H46.1652V87.8285H49.2939V84.6471ZM52.4226 83.0563V89.4192C52.4226 90.2973 51.7218 91.01 50.8583 91.01H44.6009C43.7374 91.01 43.0366 90.2973 43.0366 89.4192V83.0563C43.0366 82.1783 43.7374 81.4656 44.6009 81.4656H50.8583C51.7218 81.4656 52.4226 82.1783 52.4226 83.0563ZM33.6505 84.6471H30.5219V87.8285H33.6505V84.6471ZM36.7792 83.0563V89.4192C36.7792 90.2973 36.0784 91.01 35.2149 91.01H28.9575C28.094 91.01 27.3932 90.2973 27.3932 89.4192V83.0563C27.3932 82.1783 28.094 81.4656 28.9575 81.4656H35.2149C36.0784 81.4656 36.7792 82.1783 36.7792 83.0563ZM64.9373 52.8326H61.8087V56.0141H64.9373V52.8326ZM68.066 57.6048C68.066 58.4829 67.3652 59.1955 66.5017 59.1955H60.2443C59.3808 59.1955 58.68 58.4829 58.68 57.6048V51.2419C58.68 50.3638 59.3808 49.6512 60.2443 49.6512H66.5017C67.3652 49.6512 68.066 50.3638 68.066 51.2419V57.6048ZM64.9373 68.7398H61.8087V71.9213H64.9373V68.7398ZM66.5017 75.1027H60.2443C59.3808 75.1027 58.68 74.3901 58.68 73.512V67.1491C58.68 66.271 59.3808 65.5584 60.2443 65.5584H66.5017C67.3652 65.5584 68.066 66.271 68.066 67.1491V73.512C68.066 74.3901 67.3652 75.1027 66.5017 75.1027ZM49.2939 68.7398H46.1652V71.9213H49.2939V68.7398ZM52.4226 73.512C52.4226 74.3901 51.7218 75.1027 50.8583 75.1027H44.6009C43.7374 75.1027 43.0366 74.3901 43.0366 73.512V67.1491C43.0366 66.271 43.7374 65.5584 44.6009 65.5584H50.8583C51.7218 65.5584 52.4226 66.271 52.4226 67.1491V73.512ZM49.2939 52.8326H46.1652V56.0141H49.2939V52.8326ZM52.4226 57.6048C52.4226 58.4829 51.7218 59.1955 50.8583 59.1955H44.6009C43.7374 59.1955 43.0366 58.4829 43.0366 57.6048V51.2419C43.0366 50.3638 43.7374 49.6512 44.6009 49.6512H50.8583C51.7218 49.6512 52.4226 50.3638 52.4226 51.2419V57.6048ZM33.6505 68.7398H30.5219V71.9213H33.6505V68.7398ZM36.7792 73.512C36.7792 74.3901 36.0784 75.1027 35.2149 75.1027H28.9575C28.094 75.1027 27.3932 74.3901 27.3932 73.512V67.1491C27.3932 66.271 28.094 65.5584 28.9575 65.5584H35.2149C36.0784 65.5584 36.7792 66.271 36.7792 67.1491V73.512ZM33.6505 52.8326H30.5219V56.0141H33.6505V52.8326ZM36.7792 57.6048C36.7792 58.4829 36.0784 59.1955 35.2149 59.1955H28.9575C28.094 59.1955 27.3932 58.4829 27.3932 57.6048V51.2419C27.3932 50.3638 28.094 49.6512 28.9575 49.6512H35.2149C36.0784 49.6512 36.7792 50.3638 36.7792 51.2419V57.6048ZM77.452 25.7903C77.452 26.6668 78.1544 27.3811 79.0164 27.3811C79.8783 27.3811 80.5807 26.6668 80.5807 25.7903V19.4274C80.5807 18.551 79.8783 17.8367 79.0164 17.8367C78.1544 17.8367 77.452 18.551 77.452 19.4274V25.7903ZM74.3234 25.7903V19.4274C74.3234 16.7964 76.429 14.6553 79.0164 14.6553C81.6038 14.6553 83.7094 16.7964 83.7094 19.4274V25.7903C83.7094 28.4214 81.6038 30.5625 79.0164 30.5625C76.429 30.5625 74.3234 28.4214 74.3234 25.7903ZM61.8087 25.7903C61.8087 26.6668 62.511 27.3811 63.373 27.3811C64.2349 27.3811 64.9373 26.6668 64.9373 25.7903V19.4274C64.9373 18.551 64.2349 17.8367 63.373 17.8367C62.511 17.8367 61.8087 18.551 61.8087 19.4274V25.7903ZM58.68 25.7903V19.4274C58.68 16.7964 60.7856 14.6553 63.373 14.6553C65.9604 14.6553 68.066 16.7964 68.066 19.4274V25.7903C68.066 28.4214 65.9604 30.5625 63.373 30.5625C60.7856 30.5625 58.68 28.4214 58.68 25.7903ZM46.1652 25.7903C46.1652 26.6668 46.8676 27.3811 47.7296 27.3811C48.5915 27.3811 49.2939 26.6668 49.2939 25.7903V19.4274C49.2939 18.551 48.5915 17.8367 47.7296 17.8367C46.8676 17.8367 46.1652 18.551 46.1652 19.4274V25.7903ZM43.0366 25.7903V19.4274C43.0366 16.7964 45.1422 14.6553 47.7296 14.6553C50.317 14.6553 52.4226 16.7964 52.4226 19.4274V25.7903C52.4226 28.4214 50.317 30.5625 47.7296 30.5625C45.1422 30.5625 43.0366 28.4214 43.0366 25.7903ZM30.5219 25.7903C30.5219 26.6668 31.2242 27.3811 32.0862 27.3811C32.9481 27.3811 33.6505 26.6668 33.6505 25.7903V19.4274C33.6505 18.551 32.9481 17.8367 32.0862 17.8367C31.2242 17.8367 30.5219 18.551 30.5219 19.4274V25.7903ZM27.3932 25.7903V19.4274C27.3932 16.7964 29.4988 14.6553 32.0862 14.6553C34.6736 14.6553 36.7792 16.7964 36.7792 19.4274V25.7903C36.7792 28.4214 34.6736 30.5625 32.0862 30.5625C29.4988 30.5625 27.3932 28.4214 27.3932 25.7903ZM103.785 91.8104C104.649 91.8104 105.349 91.0978 105.349 90.2197V41.6976C105.349 40.8195 104.649 40.1068 103.785 40.1068H16.4428C15.5793 40.1068 14.8785 40.8195 14.8785 41.6976V93.396C14.8785 96.9052 17.6849 99.7589 21.1358 99.7589H97.7885C98.652 99.7589 99.3528 99.0463 99.3528 98.1682C99.3528 97.2901 98.652 96.5775 97.7885 96.5775H21.1358C19.4103 96.5775 18.0071 95.1506 18.0071 93.396V43.2883H102.221V90.2197C102.221 91.0978 102.922 91.8104 103.785 91.8104ZM100.656 102.94H16.4428C14.162 102.94 11.7498 100.487 11.7498 98.1682V36.9254H103.785C104.649 36.9254 105.349 36.2127 105.349 35.3347C105.349 34.4566 104.649 33.7439 103.785 33.7439H10.1854C9.32192 33.7439 8.62109 34.4566 8.62109 35.3347V98.1682C8.62109 102.256 12.4224 106.122 16.4428 106.122C16.4428 106.122 99.7929 106.122 100.656 106.122C100.669 106.122 100.682 106.122 100.695 106.121C101.541 106.101 102.221 105.396 102.221 104.531C102.221 103.653 101.52 102.94 100.656 102.94ZM103.785 17.8367H88.4024C87.5389 17.8367 86.8381 18.5494 86.8381 19.4274C86.8381 20.3055 87.5389 21.0182 88.4024 21.0182H103.785C106.066 21.0182 108.478 23.4711 108.478 25.7903V92.729C108.478 93.6071 109.179 94.3197 110.042 94.3197C110.138 94.3197 110.231 94.3111 110.321 94.2945C111.052 94.1608 111.607 93.5104 111.607 92.729V25.7903C111.607 21.7022 107.805 17.8367 103.785 17.8367ZM8.62109 28.9718V25.7903C8.62109 21.7022 12.4224 17.8367 16.4428 17.8367H22.7002C23.5637 17.8367 24.2645 18.5494 24.2645 19.4274C24.2645 20.3055 23.5637 21.0182 22.7002 21.0182H16.4428C14.162 21.0182 11.7498 23.4711 11.7498 25.7903V28.9718C11.7498 29.8499 11.0489 30.5625 10.1854 30.5625C9.32192 30.5625 8.62109 29.8499 8.62109 28.9718Z"
        fill="#1E1D4C"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M99.2224 57.6048C99.2224 58.4829 98.5216 59.1955 97.6581 59.1955H91.4007C90.5372 59.1955 89.8364 58.4829 89.8364 57.6048V51.2419C89.8364 50.3638 90.5372 49.6512 91.4007 49.6512H97.6581C98.5216 49.6512 99.2224 50.3638 99.2224 51.2419V57.6048ZM92.9651 52.8326H96.0938V56.0141H92.9651V52.8326Z"
        fill="#1E1D4C"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M66.5017 91.0099H60.2443C59.3808 91.0099 58.68 90.2973 58.68 89.4192V83.0563C58.68 82.1783 59.3808 81.4656 60.2443 81.4656H66.5017C67.3652 81.4656 68.066 82.1783 68.066 83.0563V89.4192C68.066 90.2973 67.3652 91.0099 66.5017 91.0099ZM61.8087 84.6471H64.9374V87.8285H61.8087V84.6471Z"
        fill="#1E1D4C"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M82.1451 75.1027H75.8877C75.0242 75.1027 74.3234 74.3901 74.3234 73.512V67.1491C74.3234 66.271 75.0242 65.5584 75.8877 65.5584H82.1451C83.0086 65.5584 83.7094 66.271 83.7094 67.1491V73.512C83.7094 74.3901 83.0086 75.1027 82.1451 75.1027ZM77.4521 68.7398H80.5807V71.9213H77.4521V68.7398Z"
        fill="#1E1D4C"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M97.7885 91.0099H91.5311C90.6676 91.0099 89.9668 90.2973 89.9668 89.4192V83.0563C89.9668 82.1783 90.6676 81.4656 91.5311 81.4656H97.7885C98.652 81.4656 99.3528 82.1783 99.3528 83.0563V89.4192C99.3528 90.2973 98.652 91.0099 97.7885 91.0099ZM93.0954 84.6471H96.2241V87.8285H93.0954V84.6471Z"
        fill="#1E1D4C"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M82.1451 91.01H75.8877C75.0242 91.01 74.3234 90.2973 74.3234 89.4192V83.0564C74.3234 82.1783 75.0242 81.4656 75.8877 81.4656H82.1451C83.0086 81.4656 83.7094 82.1783 83.7094 83.0564V89.4192C83.7094 90.2973 83.0086 91.01 82.1451 91.01ZM77.452 84.6471H80.5807V87.8285H77.452V84.6471Z"
        fill="#1E1D4C"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M97.574 75.1027H91.3166C90.4531 75.1027 89.7523 74.3901 89.7523 73.512V67.1491C89.7523 66.271 90.4531 65.5584 91.3166 65.5584H97.574C98.4375 65.5584 99.1383 66.271 99.1383 67.1491V73.512C99.1383 74.3901 98.4375 75.1027 97.574 75.1027ZM92.881 68.7398H96.0097V71.9213H92.881V68.7398Z"
        fill="#1E1D4C"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M103.448 106.122C107.733 106.122 111.607 102.13 111.607 97.8449V91.3794H108.475V97.8449C108.475 100.702 106.305 102.94 103.448 102.94H98.2754V106.122H103.448Z"
        fill="#1E1D4C"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M97.4146 99.7869C101.7 99.7869 105.352 95.2334 105.352 90.9484V84.4829H102.227V90.9484C102.227 93.8051 100.271 96.5519 97.4147 96.5519H92.2422V99.7869H97.4146Z"
        fill="#1E1D4C"
      />
    </svg>
  );
};

const AskContructionTime = () => {
  // const [constructionTime, setConstructionTime] = React.useState('');
  const [constructionTime, setConstructionTime] = React.useState(
    localStorage.getItem("constructionTime") || "",
  );

  const isMobile = useCheckMobileScreen();
  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (constructionTime) {
      return navigate("/area");
    }
  };

  if (isMobile)
    return (
      <MobileLayout
        disabled={!constructionTime}
        progress="5%"
        question="Quand à été construite votre maison ?"
        onSubmit={submitHandler}
      >
        <div className="flex flex-col gap-5 mt-12">
          <MobileRectangleOption
            img="./assets/mobile/calender1.svg"
            text="Moins de 2 ans "
            onClick={() => {
              setConstructionTime("1");
              localStorage.setItem("constructionTime", "1");
            }}
            selected={constructionTime === "1"}
          />
          <MobileRectangleOption
            img="./assets/mobile/calender1.svg"
            text="Entre 2 et 15 ans"
            onClick={() => {
              setConstructionTime("2");
              localStorage.setItem("constructionTime", "2");
            }}
            selected={constructionTime === "2"}
          />
          <MobileRectangleOption
            img="./assets/mobile/calender1.svg"
            text="Plus de 15 ans"
            onClick={() => {
              setConstructionTime("3");
              localStorage.setItem("constructionTime", "3");
            }}
            selected={constructionTime === "3"}
          />
        </div>
      </MobileLayout>
    );

  return (
    <>
      <div className="flex flex-col h-screen">
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
              style={{ width: "5%" }}
            ></div>
          </div>

          <form
            onSubmit={submitHandler}
            className="flex flex-col items-center flex-1"
          >
            <h1 className="font-semibold text-2xl text-[#1E1D4C] py-6">
              Quand à été construite votre maison ?
            </h1>
            <div className="flex items-center justify-center gap-6 xl:gap-28">
              <div
                className={`py-5 px-3 flex bg-white flex-col items-center w-52 h-48 border border-[#C8CCD8] rounded-[30px] justify-center gap-2 cursor-pointer hover:border-[#18808A] hover:shadow-lg transition-all ${
                  constructionTime === "1" && "selected"
                }`}
                onClick={() => {
                  setConstructionTime("1");
                  localStorage.setItem("constructionTime", "1");
                }}
              >
                <div className="w-[125px] h-[125px] flex items-center justify-center  ml-2">
                  <img src="./assets/calender.png" alt="Calender" />
                </div>
                <p className="text-[#999BA3] font-semibold text-xl">
                  Moins de 2 ans
                </p>
              </div>
              <div
                className={`py-5 px-3 flex bg-white flex-col items-center w-52 h-48 border border-[#C8CCD8] rounded-[30px] justify-center gap-2 cursor-pointer hover:border-[#18808A] hover:shadow-lg transition-all ${
                  constructionTime === "2" && "selected"
                }`}
                onClick={() => {
                  setConstructionTime("2");
                  localStorage.setItem("constructionTime", "2");
                }}
              >
                <div className="w-[125px] h-[125px] flex items-center justify-center  ml-2">
                  <img src="./assets/calender.png" alt="Calender" />
                </div>
                <p className="text-[#999BA3] font-semibold text-xl">
                  Entre 2 et 15 ans
                </p>
              </div>

              <div
                className={`py-5 px-3 flex bg-white flex-col items-center w-52 h-48 border border-[#C8CCD8] rounded-[30px] justify-center gap-2 cursor-pointer hover:border-[#18808A] hover:shadow-lg transition-all ${
                  constructionTime === "3" && "selected"
                }`}
                onClick={() => {
                  setConstructionTime("3");
                  localStorage.setItem("constructionTime", "3");
                }}
              >
                <div className="w-[125px] h-[125px] flex items-center justify-center ml-2">
                  <img src="./assets/calender.png" alt="Calender" />
                </div>
                <p className="text-[#999BA3] font-semibold text-xl">
                  Plus de 15 ans
                </p>
              </div>
            </div>
            <div className="my-12">
              <ContinueButton state1={constructionTime} state2="NILL" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AskContructionTime;
