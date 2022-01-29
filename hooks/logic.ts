export const numStrClean = (str: string) => {
  // str should be a number; ie: can to converted to number without being NAN
  while (str.endsWith("0") || str.endsWith("."))
    str = str.slice(0, str.length - 1);
  return str;
};

// TODO: Remember to add stackoverflow link
export function numberWithCommas(num: string) {
  return num.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
