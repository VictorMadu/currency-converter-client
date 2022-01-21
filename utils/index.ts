// NOT USED YET
export function searchInText(
  search: string,
  text: string,
  trim: boolean = true
) {
  if (trim) search = search.trim();
  const regExp = new RegExp(search.trim().replace(/[\\[.+*?(){|^$]/g, "\\$&"));
  return regExp.test(text);
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
