import UserActionTypes from "./user.types";
import { ILoginSuccess, ISettingsSuccess } from "./_dtypes";

export const loginStart = (payload: {
  email: string;
  pwd: string;
  includeNotify?: boolean;
  includeTheme?: boolean;
}) => ({
  type: UserActionTypes.LOG_IN_START,
  payload,
});

export const loginSuccess = (payload: ILoginSuccess) => ({
  type: UserActionTypes.LOGIN_IN_SUCCESS,
  payload,
});

export const loginFailure = (errMsg: string) => ({
  type: UserActionTypes.LOGIN_IN_FAILURE,
  payload: errMsg,
});

export const clearUserDetails = () => ({
  type: UserActionTypes.CLEAR_DETAILS,
});

export const changeSettingStart = (payload: {
  token: string;
  notifyOpt?: "app" | "email" | "phone";
  notifyAction?: "add" | "remove";
  theme?: "light" | "dark";
}) => ({
  type: UserActionTypes.CHANGE_SETTING_START,
  payload,
});

export const changeSettingSuccess = (payload: ISettingsSuccess) => ({
  type: UserActionTypes.CHANGE_SETTING_SUCCESS,
  payload,
});
