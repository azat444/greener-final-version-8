import React from 'react';
import useCheckMobileScreen from '../util/useCheckMobileScreen';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { Arrow } from './AskPropertyType';
import MobileLayout from '../layouts/MobileLayout';
import DoubleNumberInput from '../components/DoubleNumberInput';

const AskAccomodationAffected = () => {
  const isMobile = useCheckMobileScreen();
  // const [accomodationAffected, setAccomodationAffected] = React.useState('');
  // const [codePostal, setCodePostal] = React.useState('');

  const [accomodationAffected, setAccomodationAffected] = React.useState(
    localStorage.getItem('accomodationAffected') || ''
  );
  const [codePostal, setCodePostal] = React.useState(
    localStorage.getItem('codePostal') || ''
  );

  const navigate = useNavigate();

  const changeHandler1 = (e) => {
    setAccomodationAffected(e.target.value);
  };
  const changeHandler2 = (e) => {
    setCodePostal(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (accomodationAffected !== '' && codePostal !== '') {
      localStorage.setItem('accomodationAffected', accomodationAffected);
      localStorage.setItem('codePostal', codePostal);

      navigate('/telephone');
    }
  };

  const IDKHandler1 = () => {
    setAccomodationAffected('NILL');
    localStorage.setItem('accomodationAffected', 'NILL');
  };

  const IDKHandler2 = () => {
    setCodePostal('0');
    localStorage.setItem('codePostal', '0');
  };

  if (isMobile)
    return (
      <MobileLayout
        disabled={!accomodationAffected}
        progress="57%"
        question="Où se situe le logement concerné par les travaux?"
        onSubmit={onSubmit}
      >
        <div className="mt-12">
          <DoubleNumberInput
            isMobile={isMobile}
            state1={accomodationAffected}
            state2={codePostal}
            type1="string"
            type2="number"
            changeHandler1={changeHandler1}
            changeHandler2={changeHandler2}
            nextNav="/electricbill"
            label1={'Adresse'}
            label2={'Code Postal'}
            placeholder1={'32 rue Garibaldi 94100 Saint maur des fossès'}
            placeholder2={'75020'}
            IDKHandler1={IDKHandler1}
            IDKHandler2={IDKHandler2}
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
                style={{ width: '57%' }}
              ></div>
            </div>

            <section className="flex flex-col items-center flex-1 gap-12 py-16">
              <h1 className="font-semibold text-2xl text-[#1E1D4C]">
                Où se situe le logement concerné par les travaux?
              </h1>

              <div className="flex flex-col w-full py-6 gap-14">
                <DoubleNumberInput
                  isMobile={isMobile}
                  state1={accomodationAffected}
                  state2={codePostal}
                  type1="string"
                  type2="number"
                  changeHandler1={changeHandler1}
                  changeHandler2={changeHandler2}
                  onSubmit={onSubmit}
                  nextNav="/electricbill"
                  label1={'Adresse'}
                  label2={'Code Postal'}
                  placeholder1={'32 rue Garibaldi 94100 Saint maur des fossès'}
                  placeholder2={'75020'}
                  IDKHandler1={IDKHandler1}
                  IDKHandler2={IDKHandler2}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default AskAccomodationAffected;
