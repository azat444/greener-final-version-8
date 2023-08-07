import React from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { Arrow } from './AskPropertyType';
import HeatEnergyItem from '../components/HeatEnergyItem';
import useCheckMobileScreen from '../util/useCheckMobileScreen';
import MobileLayout from '../layouts/MobileLayout';
import MobileHeatEnergy from '../components/MobileHeatEnergy';

const AskHeatingInstall = () => {
  // const [heatingInstall, setHeatingInstall] = React.useState({
  //   1: false,
  //   2: false,
  // });

  const [heatingInstall, setHeatingInstall] = React.useState(
    JSON.parse(localStorage.getItem('heatingInstall')) || {
      1: false,
      2: false,
    }
  );

  const navigate = useNavigate();
  const isMobile = useCheckMobileScreen();

  const setSelected = (number) => {
    // only one can be true at a time
    setHeatingInstall({
      1: number === '1',
      2: number === '2',
    });
  };

  React.useEffect(() => {
    localStorage.setItem('heatingInstall', JSON.stringify(heatingInstall));
  }, [heatingInstall]);

  const handleNext = (e) => {
    e.preventDefault();
    const goals = JSON.parse(localStorage.getItem('goals'));
    if (goals.goal3) return navigate('/solar');
    if (goals.goal1) return navigate('/isolate');
    navigate('/accomodationaffected');
  };

  if (isMobile)
    return (
      <MobileLayout
        disabled={heatingInstall[1] === false && heatingInstall[2] === false}
        progress="50%"
        question="Quel équipement chauffage souhaitez vous installer?"
        onSubmit={handleNext}
        house
      >
        <div className="grid grid-cols-1 gap-4">
          <MobileHeatEnergy
            icon={'./assets/mobile/fan.png'}
            text={'Pompe à chaleur'}
            number={'1'}
            selected={heatingInstall[1]}
            setSelected={() => setSelected('1')}
          />
          <MobileHeatEnergy
            icon={'./assets/mobile/fire.png'}
            text={'Poêle à grannulés'}
            number={'2'}
            selected={heatingInstall[2]}
            setSelected={() => setSelected('2')}
          />
        </div>
      </MobileLayout>
    );

  return (
    <div className="flex flex-col h-screen ">
      <Navbar one two three />
      <div className="flex h-full">
        {/* LEFT */}
        <div className="w-[30%] bg-[#FCFFFE] h-full flex items-center justify-center shadow-2xl">
          <img
            src={`/assets/${
              heatingInstall[1]
                ? 'PompeàChaleur.png'
                : heatingInstall[2]
                ? 'PoeleàGranules.png'
                : 'home3d.png'
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

          <form
            onSubmit={handleNext}
            className="flex flex-col items-center flex-1 gap-12"
          >
            <h1 className="font-semibold text-2xl text-[#1E1D4C] py-6">
              Quel équipement de chauffage souhaitez-vous installer ?
            </h1>

            <div className="flex py-6 gap-14">
              {/* TODO  */}
              <HeatEnergyItem
                icon="/assets/fan.png"
                text="Pompe à chaleur"
                number={'1'}
                selected={heatingInstall['1']}
                setSelected={setSelected}
                hoverTitle={'Pompe à chaleur'}
                hoverDescription={
                  "Utilise l'énergie renouvelable présente dans l'air, le sol ou l'eau pour chauffer le logement de manière efficace."
                }
              />
              <HeatEnergyItem
                icon="/assets/fire.png"
                text="Poêle à granulés "
                number={'2'}
                selected={heatingInstall['2']}
                setSelected={setSelected}
                hoverTitle={'Poêle à granulés'}
                hoverDescription={
                  "Appareil de chauffage utilisant des granulés de bois comme combustible renouvelable. Efficace et respectueux de l'environnement."
                }
              />
            </div>

            <div
              className={`border ${
                heatingInstall[1] === false && heatingInstall[2] === false
                  ? 'border-[#C8CCD8]'
                  : 'border-[#18808A] hover:shadow-lg'
              } rounded-[40px] p-1 bg-[#FCFFFE] transition-all`}
            >
              <button
                type="submit"
                disabled={
                  heatingInstall[1] === false && heatingInstall[2] === false
                }
                className="disabled:bg-[#C8CCD8] bg-[#18808A] text-uppercase rounded-[40px] text-xl font-semibold text-[#FCFFFE] py-4 px-16 cursor-pointer"
              >
                CONTINUER
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AskHeatingInstall;
