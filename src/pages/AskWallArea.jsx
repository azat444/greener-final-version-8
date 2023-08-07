import React from 'react';
import NumberInput from '../components/NumberInput';
import useCheckMobileScreen from '../util/useCheckMobileScreen';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { Arrow } from './AskPropertyType';
import MobileLayout from '../layouts/MobileLayout';

const AskwallArea = () => {
  const isMobile = useCheckMobileScreen();
  // const [wallarea, setwallarea] = React.useState('');
  const [wallarea, setwallarea] = React.useState(
    localStorage.getItem('wallarea') || ''
  );

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (wallarea !== '') {
      localStorage.setItem('wallarea', wallarea);
      const goals = JSON.parse(localStorage.getItem('goals'));
      navigate('/accomodationaffected');
    }
  };

  const IDKHandler = () => {
    setwallarea(0);
    localStorage.setItem('wallarea', 'NILL');

    navigate('/accomodationaffected');
  };

  const changeHandler = (e) => {
    setwallarea(e.target.value);
    localStorage.setItem('wallarea', e.target.value);
  };

  if (isMobile)
    return (
      <MobileLayout
        disabled={wallarea === ''}
        progress="50%"
        question="Quelle est la surface des murs à isoler?"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-6 mt-12">
          <NumberInput
            isMobile={isMobile}
            state={wallarea}
            changeHandler={(e) => setwallarea(e.target.value)}
            IDKHandler={IDKHandler}
            nextNav="/heatenergy"
            label={'Surface en m²'}
            placeholder="Exemple: 60 m2"
            unit="m2"
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
            <img src="/assets/solar-house-1.png" alt="" />
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

            <section className="flex flex-col items-center flex-1 gap-12 py-16">
              <h1 className="font-semibold text-2xl text-[#1E1D4C]">
                Quelle est la surface des Murs à isoler
              </h1>

              <div className="flex w-full py-6 gap-14">
                <NumberInput
                  isMobile={isMobile}
                  state={wallarea}
                  changeHandler={changeHandler}
                  onSubmit={onSubmit}
                  IDKHandler={IDKHandler}
                  label={'Surface en m2'}
                  placeholder="Exemple: 60 m2"
                  unit="m2"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default AskwallArea;
