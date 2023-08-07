import React from 'react';

const CompassIcon = ({ selected }) => (
  <svg
    width="33"
    height="32"
    viewBox="0 0 33 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={selected ? 'text-[#18808A]' : ''}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16.5002 28.0003C23.1277 28.0003 28.5003 22.6277 28.5003 16.0002C28.5003 9.37266 23.1277 4 16.5002 4C9.87266 4 4.5 9.37266 4.5 16.0002C4.5 22.6277 9.87266 28.0003 16.5002 28.0003ZM18.8477 18.5141C18.6158 18.7175 18.3202 18.8357 17.729 19.0722C14.9572 20.1809 13.5714 20.7353 12.7798 20.1973C12.5921 20.0698 12.4302 19.9079 12.3026 19.7202C11.7647 18.9286 12.3191 17.5427 13.4278 14.771C13.6643 14.1798 13.7825 13.8842 13.9859 13.6522C14.0377 13.5932 14.0933 13.5375 14.1524 13.4857C14.3844 13.2823 14.68 13.1641 15.2712 12.9276C18.0429 11.8189 19.4288 11.2645 20.2204 11.8025C20.4081 11.93 20.57 12.0919 20.6975 12.2796C21.2355 13.0712 20.6811 14.457 19.5724 17.2288C19.3359 17.82 19.2177 18.1156 19.0143 18.3475C18.9625 18.4066 18.9068 18.4623 18.8477 18.5141Z"
      // fill={selected ? '#1f9d88' : '#C8CCD8'}
      fill="currentColor"
    />
    <circle
      cx="16.5"
      cy="16.0003"
      r="1.06667"
      // fill={selected ? '#1f9d88' : '#C8CCD8'}
      fill="currentColor"
    />
  </svg>
);

const SelectComp = ({
  selected,
  setSelected,
  text,
  isMobile,
  expand,
  icon,
  img,
}) => {
  if (isMobile) {
    return (
      <div
        onClick={setSelected}
        className={`flex ${
          expand && 'col-span-2'
        } items-center justify-center rounded-[20px] bg-[#FCFFFE] px-2 py-3 gap-1 cursor-pointer  border-2  hover:border-[#18808A] transition-all text-[#C8CCD8] hover:text-[#18808A]
         ${selected && 'selected text-[#18808A]'} ${
          isMobile ? ' ' : 'shadow-lg border-transparent'
        }`}
      >
        {icon && <CompassIcon selected={selected} />}
        {img && <img src={img} className="w-8 h-8 mx-1" alt="Icon" />}
        <p className={`flex-1 font-medium text-[15px] text-[#999BA3]`}>
          {text}
        </p>
      </div>
    );
  }

  return (
    <div
      onClick={setSelected}
      className={`flex ${
        expand && 'col-span-2'
      } items-center justify-center rounded-[20px] bg-[#FCFFFE] px-6 py-3 gap-1 cursor-pointer shadow-lg border-2 border-transparent hover:border-[#18808A] transition-all text-[#C8CCD8] hover:text-[#18808A]
       ${selected && 'selected text-[#18808A]'}`}
    >
      <p className={`flex-1 font-semibold text-xl text-[#999BA3]`}>{text}</p>
      {icon && <CompassIcon selected={selected} />}
    </div>
  );
};

export default SelectComp;
