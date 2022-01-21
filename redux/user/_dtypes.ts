import {
  clearUserDetails,
  loginStart,
  loginSuccess,
  loginFailure,
} from "./user.actions";

export interface IUserData {
  email: string;
  phone: string;
  token: string;
}

export interface IUserState {
  data: IUserData;
}

export type IUserDispatch = ReturnType<
  | typeof loginStart
  | typeof loginSuccess
  | typeof loginFailure
  | typeof clearUserDetails
>;
