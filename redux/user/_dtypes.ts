import {
  clearUserDetails,
  loginStart,
  loginSuccess,
  loginFailure,
  changeSettingSuccess,
  changeSettingStart,
} from "./user.actions";

export interface IUserData {
  email: string;
  phone: string;
  token: string;
  notify: ("app" | "email" | "phone")[] | undefined;
  app_theme: "light" | "dark" | undefined;
}

export interface IUserState {
  data: IUserData;
}

export type IUserDispatch = ReturnType<
  | typeof loginStart
  | typeof loginSuccess
  | typeof loginFailure
  | typeof clearUserDetails
  | typeof changeSettingSuccess
  | typeof changeSettingStart
>;

export interface ILoginSuccess {
  app_theme?: "light" | "dark" | undefined;
  notify?: ("app" | "phone" | "email")[] | undefined;
  phone: string;
  email: string;
  id: string;
  token: string;
}

export interface ISettingsSuccess {
  app_theme?: "light" | "dark";
  notify?: ("app" | "email" | "phone")[];
}
