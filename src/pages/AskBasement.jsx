import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeatEnergyItem from '../components/HeatEnergyItem';
import useCheckMobileScreen from '../util/useCheckMobileScreen';
import { Arrow } from './AskPropertyType';
import Navbar from '../components/Navbar';
import MobileLayout from '../layouts/MobileLayout';
import MobileHeatEnergy from '../components/MobileHeatEnergy';
import ContinueButton from '../components/ContinueButton';

const AskBasement = () => {
  const isMobile = useCheckMobileScreen();

  // const [basement, setBasement] = React.useState('');
  const [basement, setBasement] = React.useState(
    parseInt(localStorage.getItem('floorInsulation')) || ''
  );

  const setSelected = (number) => {
    setBasement(number);
    localStorage.setItem('floorInsulation', number);
  };
  let navigate = useNavigate();

  // Check if heatingInstall option is present in localStorage
  const heatingInstall =
    JSON.parse(localStorage.getItem('heatingInstall')) || {};
  const heatInstall = Object.keys(heatingInstall).find(
    (key) => heatingInstall[key] === true
  );

  // Check if solarOption is present in localStorage
  const solarOption = parseInt(localStorage.getItem('solarOption'));

  // Define a mapping object for the image filenames when only basement is present
  const imageMappingsBasement = {
    1: 'garage.png',
    2: 'videSanitaire.png',
    3: 'cave.png',
    default: 'home3d.png',
  };

  // Define a mapping object for the image filenames when only heatInstall and basement are present
  const imageMappingsHeatInstallBasement = {
    '1-1': 'PACIsoGarage.png',
    '1-2': 'PoêleGranulésIsoGarage.png',
    '2-1': 'PACIsoVideSanitaire.png',
    '2-2': 'PoêleGranulésIsoVideSanitaire.png',
    '3-1': 'PACIsoCave.png',
    '3-2': 'PoêleGranulésIsoCave.png',
    'default-1': 'garage.png',
    'default-2': 'videSanitaire.png',
    'default-3': 'cave.png',
  };

  const imageMappingsSolarBasement = {
    '1-1': 'SolarOption1IsoGarage.png',
    '1-2': 'SolarOption2IsoGarage.png',
    '2-1': 'SolarOption1IsoVideSanitaire.png',
    '2-2': 'SolarOption2IsoVideSanitaire.png',
    '3-1': 'SolarOption1IsoCave.png',
    '3-2': 'SolarOption2IsoCave.png',
    'default-1': 'garage.png',
    'default-2': 'videSanitaire.png',
    'default-3': 'cave.png',
  };

  // Define a mapping object for the image filenames when both solarOption and heatInstall are present
  const imageMappingsAllThree = {
    '1-1-1': 'SolarOption1PACIsoGarage.png',
    '1-1-2': 'SolarOption1PoêleGranulésIsoGarage.png',
    '1-2-1': 'SolarOption1PACIsoVideSanitaire.png',
    '1-2-2': 'SolarOption1PoêleGranulésIsoVideSanitaire.png',
    '1-3-1': 'SolarOption1PACIsoCave.png',
    '1-3-2': 'SolarOption1PoêleGranulésIsoCave.png',
    '2-1-1': 'SolarOption2PACIsoGarage.png',
    '2-1-2': 'SolarOption2PoeleGranulesIsoGarage.png',
    '2-2-1': 'SolarOption2PACIsoVideSanitaire.png',
    '2-2-2': 'SolarOption2PoêleGranulésIsoVideSanitaire.png',
    '2-3-1': 'SolarOption2PACIsoCave.png',
    '2-3-2': 'SolarOption2PoêleGranulésIsoCave.png',
  };

  // Decide which imageMappings to use based on the presence of solarOption and heatInstall
  let imageMappings, imageKey;

  if (solarOption && heatInstall) {
    imageMappings = imageMappingsAllThree;
    imageKey = `${solarOption}-${basement}-${heatInstall}`;
  } else if (heatInstall) {
    imageMappings = imageMappingsHeatInstallBasement;
    imageKey = `${basement}-${heatInstall}`;
  } else if (solarOption) {
    imageMappings = imageMappingsSolarBasement;
    imageKey = `${basement}-${solarOption}`;
  } else {
    imageMappings = imageMappingsBasement;
    imageKey = basement;
  }

  // Create a key to fetch the correct image filename from the mapping object

  const imageName = imageMappings[imageKey] || 'home3d.png';

  const submitHandler = (e) => {
    e.preventDefault();
    if (basement) {
      const search = window.location.search;

      if (basement === 1) {
        navigate('/askBasement1' + search);
        return;
      }
      if (basement === 2) {
        navigate('/askBasement2' + search);
        return;
      }
      if (basement === 3) {
        navigate('/askBasement3' + search);
        return;
      }
    }
  };

  if (isMobile)
    return (
      <MobileLayout
        disabled={!basement}
        progress="50%"
        question="L’isolation du sol concerne :"
        subText="Sélectioner jusqu’a N élément"
        onSubmit={submitHandler}
        house
        houseImg={'./assets/' + imageName}
      >
        <div className="grid grid-cols-1 gap-4">
          <MobileHeatEnergy
            icon={'./assets/mobile/basement1.png'}
            text={'Garage'}
            number={1}
            selected={basement === 1}
            setSelected={() => setSelected(1)}
          />
          <MobileHeatEnergy
            icon={'./assets/mobile/basement2.png'}
            text={'Vide sanitaire'}
            number={2}
            selected={basement === 2}
            setSelected={() => setSelected(2)}
          />
          <MobileHeatEnergy
            icon={'./assets/mobile/basement3.png'}
            text={'Cave'}
            number={3}
            selected={basement === 3}
            setSelected={() => setSelected(3)}
          />
        </div>
      </MobileLayout>
    );

  return (
    <>
      <div className="flex flex-col h-screen ">
        <Navbar one two three />
        <div className="flex h-full">
          {/* LEFT */}
          <div className="w-[30%] bg-[#FCFFFE] h-full flex items-center justify-center shadow-2xl">
            <img src={`/assets/${imageName}`} alt="" />
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
                style={{ width: '50%' }}
              ></div>
            </div>

            <form
              onSubmit={submitHandler}
              className="flex flex-col items-center flex-1 gap-12"
            >
              <div>
                <h1 className="font-semibold text-2xl text-[#1E1D4C]">
                  L’isolation du sol concerne?
                </h1>
                <p className="font-normal text-xl text-[#1E1D4C] py-2">
                  Sélectioner jusqu’a N élément
                </p>
              </div>

              <div className="flex py-6 gap-14">
                {/* TODO  */}
                <HeatEnergyItem
                  icon={'./assets/basement1.png'}
                  text={'Garage'}
                  number={1}
                  selected={basement === 1}
                  setSelected={setSelected}
                  isMobile={isMobile}
                  hoverTitle={'Garage'}
                  hoverDescription={
                    'Isolation des murs et du plafond du garage pour réguler la température.'
                  }
                />
                <HeatEnergyItem
                  icon={'./assets/basement2.png'}
                  text={'Vide sanitaire'}
                  number={2}
                  selected={basement === 2}
                  setSelected={setSelected}
                  isMobile={isMobile}
                  hoverTitle={'Vide sanitaire'}
                  hoverDescription={
                    'Isolation des murs et du sol du vide sanitaire pour éviter les pertes de chaleur.'
                  }
                />
                <HeatEnergyItem
                  icon={'./assets/basement3.png'}
                  text={'Cave'}
                  number={3}
                  selected={basement === 3}
                  setSelected={setSelected}
                  isMobile={isMobile}
                  hoverTitle={'Cave'}
                  hoverDescription={
                    'Isolation des murs et du sol de la cave pour prévenir les variations de température.'
                  }
                />
              </div>
              <ContinueButton state1={basement} state2={'NILL'} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AskBasement;
