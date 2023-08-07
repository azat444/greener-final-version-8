import React from 'react';

export const InfoIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.66699 15.9998C1.66699 8.08376 8.08424 1.6665 16.0003 1.6665C23.9164 1.6665 30.3337 8.08376 30.3337 15.9998C30.3337 23.9159 23.9164 30.3332 16.0003 30.3332C8.08424 30.3332 1.66699 23.9159 1.66699 15.9998ZM16.0003 3.6665C9.18881 3.6665 3.66699 9.18833 3.66699 15.9998C3.66699 22.8113 9.18881 28.3332 16.0003 28.3332C22.8118 28.3332 28.3337 22.8113 28.3337 15.9998C28.3337 9.18833 22.8118 3.6665 16.0003 3.6665Z"
      fill="#8DD9DE"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16.667 13.6665C17.2193 13.6665 17.667 14.1142 17.667 14.6665L17.667 22.6665C17.667 23.2188 17.2193 23.6665 16.667 23.6665C16.1147 23.6665 15.667 23.2188 15.667 22.6665L15.667 14.6665C15.667 14.1142 16.1147 13.6665 16.667 13.6665Z"
      fill="#8DD9DE"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.667 14.6665C17.667 15.2188 17.2193 15.6665 16.667 15.6665L14.0003 15.6665C13.448 15.6665 13.0003 15.2188 13.0003 14.6665C13.0003 14.1142 13.448 13.6665 14.0003 13.6665L16.667 13.6665C17.2193 13.6665 17.667 14.1142 17.667 14.6665Z"
      fill="#8DD9DE"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16.667 8.33301C17.2193 8.33301 17.667 8.78072 17.667 9.33301L17.667 10.6663C17.667 11.2186 17.2193 11.6663 16.667 11.6663C16.1147 11.6663 15.667 11.2186 15.667 10.6663L15.667 9.33301C15.667 8.78072 16.1147 8.33301 16.667 8.33301Z"
      fill="#8DD9DE"
    />
  </svg>
);

const InfoIconBlack = () => (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.54199 9.99984C1.54199 5.05229 5.55277 1.0415 10.5003 1.0415C15.4479 1.0415 19.4587 5.05229 19.4587 9.99984C19.4587 14.9474 15.4479 18.9582 10.5003 18.9582C5.55277 18.9582 1.54199 14.9474 1.54199 9.99984ZM10.5003 2.2915C6.24313 2.2915 2.79199 5.74264 2.79199 9.99984C2.79199 14.257 6.24313 17.7082 10.5003 17.7082C14.7575 17.7082 18.2087 14.257 18.2087 9.99984C18.2087 5.74264 14.7575 2.2915 10.5003 2.2915Z"
      fill="#1E1D4C"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.917 8.5415C11.2622 8.5415 11.542 8.82133 11.542 9.1665L11.542 14.1665C11.542 14.5117 11.2622 14.7915 10.917 14.7915C10.5718 14.7915 10.292 14.5117 10.292 14.1665L10.292 9.1665C10.292 8.82133 10.5718 8.5415 10.917 8.5415Z"
      fill="#1E1D4C"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.542 9.1665C11.542 9.51168 11.2622 9.7915 10.917 9.7915L9.25033 9.7915C8.90515 9.7915 8.62533 9.51168 8.62533 9.1665C8.62533 8.82133 8.90515 8.5415 9.25033 8.5415L10.917 8.5415C11.2622 8.5415 11.542 8.82133 11.542 9.1665Z"
      fill="#1E1D4C"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.917 5.20801C11.2622 5.20801 11.542 5.48783 11.542 5.83301L11.542 6.66634C11.542 7.01152 11.2622 7.29134 10.917 7.29134C10.5718 7.29134 10.292 7.01152 10.292 6.66634L10.292 5.83301C10.292 5.48783 10.5718 5.20801 10.917 5.20801Z"
      fill="#1E1D4C"
    />
  </svg>
);

export const Tooltip = ({ title, description, children }) => {
  return (
    <div class="group relative flex items-center justify-center">
      {children}
      <div class="absolute bottom-10 w-80 min-h-40 scale-0 transition-all flex flex-col gap-2 bg-[#FCFFFE] border border-[#C8CCD8] px-6 py-6 text-black group-hover:scale-100 rounded-lg pointer-events-none z-10 shadow-md">
        <div className="flex items-center justify-center gap-1">
          <InfoIconBlack />
          <p className="text-base font-semibold">
            {title ? title : 'Information produit'}
          </p>
        </div>
        <p className="text-base leading-5">
          {description
            ? description
            : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'}
        </p>
      </div>
    </div>
  );
};

const HeatEnergyItem = ({
  icon,
  text,
  selected,
  setSelected,
  number,
  size,
  tooltip = true,
  hoverTitle,
  hoverDescription,
}) => {
  return (
    <div
      className={`h-48 w-[220px] p-1 relative flex flex-col items-center justify-center border-2 rounded-[2.625rem] border-[#c8ccd8] bg-[#FCFFFE] cursor-pointer hover:border-[#18808A] transition-all hover:shadow-lg ${
        selected && ' selected '
      }`}
      onClick={() => setSelected(number)}
    >
      {tooltip && (
        <div className="absolute top-3 right-4">
          <Tooltip title={hoverTitle} description={hoverDescription}>
            <InfoIcon />
          </Tooltip>
        </div>
      )}

      <img className={size + '  '} src={icon} alt="Icon" />
      <p
        className={`text-center text-[#999BA3] text-xl leading-5 font-semibold w-fit px-2`}
      >
        {text}
      </p>
    </div>
  );
};

export default HeatEnergyItem;
