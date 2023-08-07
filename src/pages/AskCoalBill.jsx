import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCheckMobileScreen from '../util/useCheckMobileScreen';
import NumberInput from '../components/NumberInput';
import { Arrow } from './AskPropertyType';
import Navbar from '../components/Navbar';
import { generateHeatEnergyURLstring } from '../util/generateURLstring';
import MobileLayout from '../layouts/MobileLayout';

const AskCoalBill = () => {
  const isMobile = useCheckMobileScreen();
  // const [coalBill, setCoalBill] = React.useState('');
  const [coalBill, setCoalBill] = React.useState(
    localStorage.getItem('coalBill') || ''
  );
  const navigate = useNavigate();
  const url = generateHeatEnergyURLstring();

  const changeHandler = (e) => {
    setCoalBill(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('coalBill', coalBill);
    navigate(url);
  };
  const IDKHandler = () => {
    setCoalBill('0');
    localStorage.setItem('coalBill', 'NILL');
    navigate(url);
  };

  if (isMobile)
    return (
      <MobileLayout
        disabled={!coalBill}
        progress="20%"
        question="Quelle est le montant de votre facture de charbon  ?"
        onSubmit={onSubmit}
      >
        <div className="mt-12">
          <NumberInput
            isMobile={isMobile}
            state={coalBill}
            changeHandler={changeHandler}
            IDKHandler={IDKHandler}
            nextNav="/heatenergy"
            label={'Montant par mois'}
            placeholder="Exemple: 60 €"
            unit="€/mois"
          />
        </div>
      </MobileLayout>
    );

  return (
    <>
      <div className="flex flex-col h-screen ">
        <Navbar one two />{' '}
        <div className="flex h-full">
          {/* LEFT */}
          <div className="w-[30%] bg-[#FCFFFE] h-full flex items-center justify-center shadow-2xl">
            <img src="/assets/home3d.png" alt="" />
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
                style={{ width: '20%' }}
              ></div>
            </div>

            <section className="flex flex-col items-center flex-1">
              <h1 className="font-semibold text-2xl text-[#1E1D4C] py-6">
                Quelle est le montant de votre facture de charbon ?
              </h1>

              <NumberInput
                isMobile={isMobile}
                state={coalBill}
                changeHandler={changeHandler}
                onSubmit={onSubmit}
                IDKHandler={IDKHandler}
                nextNav="/goals"
                label={'Montant par mois'}
                placeholder="Exemple: 60 €"
                unit="€/mois"
              />
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default AskCoalBill;
