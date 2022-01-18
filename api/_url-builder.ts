import { map } from "lodash";

export const getCurrencyPriceUrlBuilder = (baseCurrency?: string) =>
  baseCurrency != null ? "?base=" + baseCurrency : "";

export const getCurrenciesAlertQueryUrlBuilder = (
  base: string | undefined,
  quotas: string[] | undefined,
  type: "pending" | "triggered" | undefined
) => {
  let stringBuilder = "";
  if (base) stringBuilder += "&base=" + base;
  if (quotas) map(quotas, (quota) => (stringBuilder += "&quota=" + quota));
  if (type) stringBuilder += "$type=" + type;

  return stringBuilder === "" ? stringBuilder : "?" + stringBuilder.slice(1);
};
