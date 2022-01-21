import UserActionTypes from "./user.types";

export const loginStart = (payload: { email: string; pwd: string }) => ({
  type: UserActionTypes.LOG_IN_START,
  payload,
});

export const loginSuccess = (payload: {
  email: string;
  phone: string;
  token: string;
}) => ({
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
