import axios from "axios";
import { ICurrencyPricesRes, ICurrenciesAlertsRes } from "./_dtypes";
import { map } from "lodash";

const BASE_URL = "http://127.0.0.1:8080/api";

export const getCurrencyPrices = async (baseCurrency?: string) => {
  // TODO: Handle Network Error
  const withbaseCurrency = (baseCurrency?: string) =>
    baseCurrency != null ? "?base=" + baseCurrency : "";
  const url = `${BASE_URL}/currency${withbaseCurrency(baseCurrency)}`;
  const res = await axios.get(url);
  const resData = res.data as ICurrencyPricesRes;
  if (!resData.success) return alert("Could not retrieve data");
  return resData.data;
};

export const getCurrenciesAlerts = async (
  base: string | undefined,
  quotas: string[] | undefined,
  type: "pending" | "triggered" | undefined
) => {
  const url = `${BASE_URL}/currency/get-alerts${buildCurrenciesAlertQuery(
    base,
    quotas,
    type
  )}`;

  const res = await axios.get(url);
  const resData = res.data as ICurrenciesAlertsRes;
  if (!resData.success)
    return alert("Error getting alerts. Trying logging in your acount");

  return resData.data;
};

const buildCurrenciesAlertQuery = (
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

"  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGQ2NTZhZmI3YWM4ZWVhY2UxZGUxZiIsImlhdCI6MTY0MjQxMjYwOCwiZXhwIjoxNjQyNDE2MjA4fQ.G5429lHXd2oGnWoW6dpDVPUzsbwl24AVYeHwqPqYRAE";
