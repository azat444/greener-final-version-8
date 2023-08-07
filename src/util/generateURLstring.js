export const generateURLstring = () => {
  const pathArray = window.location.href.split("?");
  pathArray.shift();

  let url = "";
  pathArray.forEach((item) => {
    url ? (url += `?${item}`) : (url += `/${item}`);
  });

  return url;
};

export const generateHeatEnergyURLstring = () => {
  const pathArray = window.location.href.split("?");
  pathArray.shift();

  let url = "";
  pathArray.forEach((item) => {
    url ? (url += `?${item}`) : (url += `/${item}`);
  });

  if (url === "") return "/goals";
  else return url;
};
