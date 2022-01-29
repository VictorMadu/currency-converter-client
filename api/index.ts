import axios, { AxiosResponse } from "axios";
import {
  ICurrencyPricesRes,
  ICurrenciesAlertsRes,
  ISignUpRes,
  ILoginRes,
  ICreateCurrencyAlertRes,
  IChangeSettingRes,
} from "./_dtypes";
import {
  getCurrenciesAlertQueryUrlBuilder,
  getCurrencyPriceUrlBuilder,
} from "./_url-builder";

const SERVER_URL = "https://127.0.0.1:8080";
const SERVER_WS = "wss://127.0.0.1:8080";
const SERVER_API_URL = `${SERVER_URL}/api`;

export const getCurrencyPrices = async (baseCurrency?: string) => {
  // TODO: Handle Network Error
  const res = await axios.get<ICurrencyPricesRes>(
    `${SERVER_API_URL}/currency${getCurrencyPriceUrlBuilder(baseCurrency)}`
  );

  if (!res.data.success) return alert("Could not retrieve data");
  return res.data.data;
};

export const getCurrenciesAlerts = async (
  token: string,
  bases: string[] | undefined,
  quotas: string[] | undefined,
  type: "pending" | "triggered" | undefined
) => {
  const url = `${SERVER_API_URL}/currency/get-alerts${getCurrenciesAlertQueryUrlBuilder(
    bases,
    quotas,
    type
  )}`;

  const res = await axios.get<any, AxiosResponse<ICurrenciesAlertsRes>>(url, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  if (!res.data.success)
    return (
      alert && alert("Error getting alerts. Trying logging in your account")
    );

  return res.data.data;
};

export const signUpUser = async (email: string, phone: string, pwd: string) => {
  const url = `${SERVER_API_URL}/user/sign-up`;
  const res = await axios.post<ISignUpRes>(url, {
    email,
    phone,
    pwd,
  });

  if (!res.data.success) return alert && alert(res.data);
  return res.data.data;
};

export const loginUser = async (payload: {
  email: string;
  pwd: string;
  includeNotify?: boolean;
  includeTheme?: boolean;
}) => {
  if (payload.includeNotify === undefined) payload.includeNotify = true;
  if (payload.includeTheme === undefined) payload.includeTheme = true;

  const url = `${SERVER_API_URL}/user/log-in?notify_opts=${+payload.includeNotify}&theme=${+payload.includeTheme}`;
  const res = await axios.post<ILoginRes>(url, {
    email: payload.email,
    pwd: payload.pwd,
  });

  if (!res.data.success) return alert && alert(res.data.data);
  return res.data.data;
};

export const createCurrencyAlert = async (
  token: string,
  base: string,
  quota: string,
  target_rate: number
) => {
  const url = `${SERVER_API_URL}/currency/post-alert`;
  const res = (await axios({
    method: "POST",
    url,
    data: {
      base,
      quota,
      target_rate,
    },
    headers: {
      Authorization: "Bearer " + token,
    },
  })) as AxiosResponse<ICreateCurrencyAlertRes>;
  return res.data.success;
};

export const changeUserSettings = async (payload: {
  token: string;
  notify_action?: "add" | "remove";
  notify_opts?: ("app" | "email" | "phone")[];
  theme?: "light" | "dark";
}) => {
  const url = `${SERVER_API_URL}/user/settings?notify_opts=1&theme=1`;
  const res = (await axios({
    method: "PUT",
    url,
    data: {
      notify_action: payload.notify_action,
      notify_opts: payload.notify_opts,
      theme: payload.theme,
    },
    headers: {
      Authorization: "Bearer " + payload.token,
    },
  })) as AxiosResponse<IChangeSettingRes>;
  return res.data.data;
};

export const generateCurrencyWebSocketTicket = async (payload: {
  token: string;
}) => {
  const url = `${SERVER_API_URL}/user/ws-ticket`;
  const res = (await axios({
    method: "POST",
    url,
    headers: {
      Authorization: "Bearer " + payload.token,
    },
  })) as AxiosResponse<{ success: boolean }>;

  return res.data.success;
};

export const createCurrencyWebSocketConnection = async () => {
  const ws = new WebSocket(SERVER_WS + "/currency");
  return ws;
};
