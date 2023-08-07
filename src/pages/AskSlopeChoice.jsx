import React from 'react';
import { useNavigate } from 'react-router-dom';
import SelectComp from '../components/SelectComp';
import useCheckMobileScreen from '../util/useCheckMobileScreen';
import Navbar from '../components/Navbar';
import { Arrow } from './AskPropertyType';
import MobileLayout from '../layouts/MobileLayout';

const AskSlopeChoice = () => {
  const isMobile = useCheckMobileScreen();
  // const [slopeChoice, setslopeChoice] = React.useState('');
  const [slopeChoice, setslopeChoice] = React.useState(
    localStorage.getItem('slopeChoice') || ''
  );

  const setSelected = (number) => {
    setslopeChoice(number);
    localStorage.setItem('slopeChoice', number);
  };

  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (slopeChoice !== '') {
      const goals = JSON.parse(localStorage.getItem('goals'));
      if (goals.goal1) return navigate('/isolate');

      navigate('/accomodationaffected');
    }
  };

  if (isMobile)
    return (
      <MobileLayout
        disabled={slopeChoice === ''}
        progress="50%"
        question="Quelle est le revêtement de votre toiture?"
        onSubmit={submitHandler}
        house
      >
        <div className="grid grid-cols-2 gap-4 ">
          <SelectComp
            selected={slopeChoice === '1'}
            setSelected={() => setSelected('1')}
            text="Tuile mécanique"
            isMobile={isMobile}
            icon
          />
          <SelectComp
            selected={slopeChoice === '2'}
            setSelected={() => setSelected('2')}
            text="Ardoise"
            isMobile={isMobile}
            icon
          />
          <SelectComp
            selected={slopeChoice === '3'}
            setSelected={() => setSelected('3')}
            text={'Bac acier'}
            isMobile={isMobile}
            icon
          />
          <SelectComp
            selected={slopeChoice === '4'}
            setSelected={() => setSelected('4')}
            text={'Autre'}
            isMobile={isMobile}
            icon
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
                slopeChoice === '1'
                  ? 'tuileMecanique.png'
                  : slopeChoice === '2'
                  ? 'ardoise.png'
                  : slopeChoice === '3'
                  ? 'bacAcier.png'
                  : slopeChoice === '4'
                  ? 'autre.png'
                  : 'solar-house-1.png'
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
              onSubmit={submitHandler}
              className="flex flex-col items-center flex-1 gap-6 py-6"
            >
              <h1 className="font-semibold text-2xl text-[#1E1D4C] text-center">
                Quelle est le revêtement de votre toiture?
              </h1>

              <div className="grid w-3/4 grid-cols-2 gap-6 py-6">
                <SelectComp
                  selected={slopeChoice === '1'}
                  setSelected={() => setSelected('1')}
                  text="Tuile mécanique"
                  isMobile={isMobile}
                  icon
                />
                <SelectComp
                  selected={slopeChoice === '2'}
                  setSelected={() => setSelected('2')}
                  text="Ardoise"
                  isMobile={isMobile}
                  icon
                />
                <SelectComp
                  selected={slopeChoice === '3'}
                  setSelected={() => setSelected('3')}
                  text={'Bac acier'}
                  isMobile={isMobile}
                  icon
                />
                <SelectComp
                  selected={slopeChoice === '4'}
                  setSelected={() => setSelected('4')}
                  text={'Autre'}
                  isMobile={isMobile}
                  icon
                />
              </div>
              <div
                className={`border ${
                  slopeChoice === '' ? 'border-[#C8CCD8]' : 'border-[#18808A]'
                } rounded-[40px] p-1 bg-[#FCFFFE]`}
              >
                <button
                  type="submit"
                  disabled={slopeChoice === ''}
                  className="disabled:bg-[#C8CCD8] bg-[#18808A] text-uppercase rounded-[40px] text-xl font-semibold text-[#FCFFFE] py-4 px-16 cursor-pointer"
                >
                  CONTINUER
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AskSlopeChoice;
