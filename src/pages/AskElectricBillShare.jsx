import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCheckMobileScreen from '../util/useCheckMobileScreen';
import NumberInput from '../components/NumberInput';
import { Arrow } from './AskPropertyType';
import Navbar from '../components/Navbar';
import { generateHeatEnergyURLstring } from '../util/generateURLstring';
import MobileLayout from '../layouts/MobileLayout';

const AskElectricBillShare = () => {
  const isMobile = useCheckMobileScreen();
  // const [electricBillShare, setElectricBillShare] = React.useState('');
  const [electricBillShare, setElectricBillShare] = React.useState(
    localStorage.getItem('electricBillShare') || ''
  );
  const navigate = useNavigate();
  const url = generateHeatEnergyURLstring();

  const changeHandler = (e) => {
    setElectricBillShare(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('electricBillShare', electricBillShare);
    navigate(url);
  };
  const IDKHandler = () => {
    setElectricBillShare(0);
    localStorage.setItem('electricBillShare', 'NILL');
    navigate(url);
  };

  if (isMobile)
    return (
      <MobileLayout
        disabled={!electricBillShare}
        progress="25%"
        question="Quelle est le montant de votre facture fioul ?"
        onSubmit={onSubmit}
      >
        <div className="mt-12">
          <NumberInput
            isMobile={isMobile}
            state={electricBillShare}
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
                style={{ width: '25%' }}
              ></div>
            </div>

            <section className="flex flex-col items-center flex-1">
              <h1 className="font-semibold text-2xl text-[#1E1D4C] py-6">
                Quel est la quote part de votre facture d’éléctricité dans le
                chauffage ?
              </h1>

              <NumberInput
                isMobile={isMobile}
                state={electricBillShare}
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

export default AskElectricBillShare;
