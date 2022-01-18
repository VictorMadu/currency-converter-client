import UserActionTypes from "./user.types";
import { IUserDetails } from "./_dtypes";

export const setUserDetails = (payload: IUserDetails) => ({
  type: UserActionTypes.SET_DETAILS,
  payload,
});
