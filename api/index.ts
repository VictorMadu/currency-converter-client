import axios from "axios";
import {
  ICurrencyPricesRes,
  ICurrenciesAlertsRes,
  ISignUpRes,
  ILoginRes,
} from "./_dtypes";
import {
  getCurrenciesAlertQueryUrlBuilder,
  getCurrencyPriceUrlBuilder,
} from "./_url-builder";

const BASE_URL = "http://127.0.0.1:8080/api";

export const getCurrencyPrices = async (baseCurrency?: string) => {
  // TODO: Handle Network Error
  const res = await axios.get<ICurrencyPricesRes>(
    `${BASE_URL}/currency${getCurrencyPriceUrlBuilder(baseCurrency)}`
  );

  if (!res.data.success) return alert("Could not retrieve data");
  return res.data.data;
};

export const getCurrenciesAlerts = async (
  token: string,
  base: string | undefined,
  quotas: string[] | undefined,
  type: "pending" | "triggered" | undefined
) => {
  const url = `${BASE_URL}/currency/get-alerts${getCurrenciesAlertQueryUrlBuilder(
    base,
    quotas,
    type
  )}`;

  const res = await axios.get<ICurrenciesAlertsRes>(url, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  if (!res.data.success)
    return alert("Error getting alerts. Trying logging in your account");

  return res.data.data;
};

export const signUpUser = async (email: string, phone: string, pwd: string) => {
  const url = `${BASE_URL}/user/sign-up`;
  const res = await axios.post<ISignUpRes>(url, {
    email,
    phone,
    pwd,
  });

  if (!res.data.success) return alert(res.data);
  return res.data.data;
};

export const loginUser = async (email: string, pwd: string) => {
  const url = `${BASE_URL}/user/log-in`;
  const res = await axios.post<ILoginRes>(url, {
    email,
    pwd,
  });

  if (!res.data.success) return alert(res.data.data);
  return res.data.data;
};
