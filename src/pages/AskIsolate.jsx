import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HeatEnergyItem from '../components/HeatEnergyItem';
import useCheckMobileScreen from '../util/useCheckMobileScreen';
import { Arrow } from './AskPropertyType';
import Navbar from '../components/Navbar';
import MobileLayout from '../layouts/MobileLayout';
import MobileHeatEnergy from '../components/MobileHeatEnergy';

const AskIsolate = () => {
  const isMobile = useCheckMobileScreen();
  const navigate = useNavigate();

  // const [isolate, setIsolate] = React.useState({
  //   isolate1: false,
  //   isolate2: false,
  //   isolate3: false,
  // });

  const [isolate, setIsolate] = React.useState(
    localStorage.getItem('isolate')
      ? JSON.parse(localStorage.getItem('isolate'))
      : {
          isolate1: false,
          isolate2: false,
          isolate3: false,
        }
  );

  const [url, setUrl] = React.useState('');

  React.useEffect(() => {
    const isolateFromLocalStorage = JSON.parse(localStorage.getItem('isolate'));
    if (isolateFromLocalStorage) {
      setIsolate(isolateFromLocalStorage);
    }
  }, []);

  const generateURLstring = (isolate) => {
    let url = '';
    if (isolate.isolate1) {
      url ? (url += '?basement') : (url += '/basement');
    }
    if (isolate.isolate2) {
      url ? (url += '?atticInsulation') : (url += '/atticInsulation');
    }
    if (isolate.isolate3) {
      url ? (url += '?wallInsulation') : (url += '/wallInsulation');
    }
    setUrl((prev) => url);
  };

  React.useEffect(() => {
    generateURLstring(isolate);
    localStorage.setItem('isolate', JSON.stringify(isolate));
  }, [isolate]);

  const handleSelect = async (number) => {
    await setIsolate((prev) => ({
      ...prev,
      [`isolate${number}`]: !prev[`isolate${number}`],
    }));
  };

  const submitHandler = () => {
    navigate(url);
  };

  if (isMobile)
    return (
      <MobileLayout
        disabled={!isolate.isolate1 && !isolate.isolate2 && !isolate.isolate3}
        progress="50%"
        question="Que vouslez vous isoler?"
        subText="Sélectioner jusqu’a N élément"
        onSubmit={submitHandler}
        house
      >
        <div className="grid grid-cols-1 gap-4">
          <MobileHeatEnergy
            icon={'./assets/mobile/isolate1.png'}
            text={'Sous-sol'}
            number={'1'}
            selected={isolate.isolate1}
            setSelected={() => handleSelect(1)}
          />
          <MobileHeatEnergy
            icon={'./assets/mobile/isolate2.png'}
            text={'Combles'}
            number={'2'}
            selected={isolate.isolate2}
            setSelected={() => handleSelect(2)}
          />
          <MobileHeatEnergy
            icon={'./assets/mobile/isolate3.png'}
            text={'Murs'}
            number={'3'}
            selected={isolate.isolate3}
            setSelected={() => handleSelect(3)}
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
            <img
              src={`/assets/${
                isolate.isolate1
                  ? 'PACIsoGarage.png'
                  : isolate.isolate2
                  ? 'PACIsoVideSanitaire.png'
                  : isolate.isolate3
                  ? 'PACIsoCave.png'
                  : 'solar-house-1.png' // Image par défaut si aucune option n'est sélectionnée
              }`}
              alt=""
            />
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

            <section className="flex flex-col items-center flex-1 gap-12">
              <div>
                <h1 className="font-semibold text-2xl text-[#1E1D4C]">
                  Que voulez-vous isoler?
                </h1>
                <p className="font-normal text-xl text-[#1E1D4C] py-2">
                  Sélectioner jusqu’a N élément
                </p>
              </div>

              <div className="flex py-6 gap-14">
                {/* TODO  */}
                <HeatEnergyItem
                  icon={'./assets/isolate1.png'}
                  text={'Sous-sol'}
                  number={'1'}
                  selected={isolate.isolate1}
                  setSelected={() => handleSelect(1)}
                  isMobile={isMobile}
                  hoverTitle={'Sous-sol'}
                  hoverDescription={
                    'Isolation des planchers et des murs du sous-sol pour prévenir les pertes de chaleur et l’humidité.'
                  }
                />
                <HeatEnergyItem
                  icon={'./assets/isolate2.png'}
                  text={'Combles'}
                  number={'2'}
                  selected={isolate.isolate2}
                  setSelected={() => handleSelect(2)}
                  isMobile={isMobile}
                  hoverTitle={'Combles'}
                  hoverDescription={
                    'Isolation de la toiture pour éviter les déperditions de chaleur vers l’extérieur.'
                  }
                />
                <HeatEnergyItem
                  icon={'./assets/isolate3.png'}
                  text={'Murs'}
                  number={'3'}
                  selected={isolate.isolate3}
                  setSelected={() => handleSelect(3)}
                  isMobile={isMobile}
                  hoverTitle={'Murs'}
                  hoverDescription={
                    'Isolation des murs pour réduire les pertes de chaleur et améliorer le confort thermique. '
                  }
                />
              </div>

              {/* Button */}
              <Link to={url}>
                <div
                  className={`border ${
                    isolate.isolate1 === false &&
                    isolate.isolate2 === false &&
                    isolate.isolate3 === false
                      ? 'border-[#C8CCD8]'
                      : 'border-[#18808A]'
                  } rounded-[40px] p-1 bg-[#FCFFFE]`}
                >
                  <button
                    type="submit"
                    disabled={
                      isolate.isolate1 === false &&
                      isolate.isolate2 === false &&
                      isolate.isolate3 === false
                    }
                    className="disabled:bg-[#C8CCD8] bg-[#18808A] text-uppercase rounded-[40px] text-xl font-semibold text-[#FCFFFE] py-4 px-16 cursor-pointer"
                  >
                    CONTINUER
                  </button>
                </div>
              </Link>
            </section>
          </div>
        </div>
      </div>
      {/* 
        <Link to={url}>
          <button
            disabled={
              !isolate.isolate1 &&
              !isolate.isolate2 &&
              !isolate.isolate3 &&
              !isolate.isolate4 &&
              !isolate.isolate5
            }
            className="mt-4 button"
          >
            CONTINUER
          </button>
        </Link> */}
    </>
  );
};

export default AskIsolate;
