import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import AskPropertyType from "./pages/AskPropertyType";
import AskContructionTime from "./pages/AskContructionTime";
import AskArea from "./pages/AskArea";
import AskGoals from "./pages/AskGoals";
import AskHeatingEnergy from "./pages/AskHeatingEnergy";
import NotEligibleForRenovation from "./pages/NotEligibleForRenovation";
import AskOilEquipment from "./pages/AskOilEquipment";
import AskElectricEquipment from "./pages/AskElectricEquipment";
import AskGasEquipment from "./pages/AskGasEquipment";
import AskIsolate from "./pages/AskIsolate";
import AskHeatingEquipment from "./pages/AskHeatingEquipment";
import AskGarage from "./pages/AskGarage";
import AskAtticInsulation from "./pages/AskAtticInsulation";
import AskAtticArea from "./pages/AskAtticArea";
import AskWallArea from "./pages/AskWallArea";
import AskBasementArea from "./pages/AskBasementArea";
import AskwallInsulation from "./pages/AskWallInsulation";
import AskcrawlSpaceArea from "./pages/AskCrawlSpaceArea";
import AskSolarOption from "./pages/AskSolarOption";
import AskRoofOrientation from "./pages/AskRoofOrientation";
import AskRoofArea from "./pages/AskRoofArea";
import AskSlopeChoice from "./pages/AskSlopeChoice";
import AskSlopeChoice2 from "./pages/AskSlopeChoice2";
import AskElectricBill from "./pages/AskElectricBill";
import AskAccomodationAffected from "./pages/AskAccomodationAffected";
import AskName from "./pages/AskName";
import AskTelephone from "./pages/AskTelephone";
import EndScreen from "./pages/EndScreen";
import AskFuelBill from "./pages/AskFuelBill";
import AskWoodBill from "./pages/AskWoodBill";
import AskCoalBill from "./pages/AskCoalBill";
import AskElectricBillShare from "./pages/AskElectricBillShare";
import AskgasBill from "./pages/AskGasBill";
import AskHeatingInstall from "./pages/AskHeatingInstall";
import AskBasement from "./pages/AskBasement";
import AskBasement1 from "./pages/AskBasement1";
import AskBasement2 from "./pages/AskBasement2";
import AskBasement3 from "./pages/AskBasement3";
import AskAccomodationAffectee from "./pages/AskAccomodationAffectee";
import AskPeopleLiving from "./pages/AskPeopleLiving";
import AskTotalIncomeTax from "./pages/AskTotalIncomeTax";
// import Eligible from "./pages/Eligible";
import TelephoneAppointment from "./pages/TelephoneAppointment";
import AskWorkStart from "./pages/AskWorkStart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AskPropertyType />} />
      <Route path="/time" element={<AskContructionTime />} />
      <Route path="/noteligible" element={<NotEligibleForRenovation />} />
      <Route path="/area" element={<AskArea />} />
      <Route path="/electricbill" element={<AskElectricBill />} />
      <Route path="/electricbillshare" element={<AskElectricBillShare />} />
      <Route path="/heatenergy" element={<AskHeatingEnergy />} />
      <Route path="/oilequipment" element={<AskOilEquipment />} />
      <Route path="/fuelbill" element={<AskFuelBill />} />
      <Route path="/woodbill" element={<AskWoodBill />} />
      <Route path="/coalbill" element={<AskCoalBill />} />
      <Route path="/gasbill" element={<AskgasBill />} />
      <Route path="/goals" element={<AskGoals />} />
      <Route path="/isolate" element={<AskIsolate />} />
      <Route path="/heatinstall" element={<AskHeatingInstall />} />
      <Route path="/basement" element={<AskBasement />} />
      <Route path="/askBasement1" element={<AskBasement1 />} />
      <Route path="/askBasement2" element={<AskBasement2 />} />
      <Route path="/askBasement3" element={<AskBasement3 />} />

      <Route path="/garage" element={<AskGarage />} />
      <Route path="/atticInsulation" element={<AskAtticInsulation />} />
      <Route path="/atticArea" element={<AskAtticArea />} />
      <Route path="/basementArea" element={<AskBasementArea />} />
      <Route path="/wallInsulation" element={<AskwallInsulation />} />
      <Route path="/wallArea" element={<AskWallArea />} />
      <Route path="/crawlSpaceArea" element={<AskcrawlSpaceArea />} />
      <Route path="/electricequipment" element={<AskElectricEquipment />} />
      <Route path="/gasequipment" element={<AskGasEquipment />} />
      <Route path="/heatingequipment" element={<AskHeatingEquipment />} />
      <Route path="/solar" element={<AskSolarOption />} />
      <Route path="/rooforientation" element={<AskRoofOrientation />} />
      <Route path="/roofarea" element={<AskRoofArea />} />
      <Route path="/slopechoice2" element={<AskSlopeChoice2 />} />
      <Route path="/slopechoice" element={<AskSlopeChoice />} />
      <Route
        path="/accomodationaffected"
        element={<AskAccomodationAffected />}
      />
      <Route path="/telephone" element={<AskTelephone />} />
      <Route
        path="/accomodationAffectee"
        element={<AskAccomodationAffectee />}
      />
      <Route path="/people" element={<AskPeopleLiving />} />
      <Route path="/incometax" element={<AskTotalIncomeTax />} />
      <Route path="/name" element={<AskName />} />
      {/* <Route path="/eligible" element={<Eligible />} /> */}
      <Route path="/appointment" element={<TelephoneAppointment />} />
      <Route path="/workstart" element={<AskWorkStart />} />
      <Route path="/endscreen" element={<EndScreen />} />
    </Routes>
  </BrowserRouter>
);
