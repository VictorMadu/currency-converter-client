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
