import UserActionTypes from "./user.types";
import { IUserDetails } from "./_dtypes";

export const fetchUserDetailsSuccess = (payload: IUserDetails) => ({
  type: UserActionTypes.FETCH_DETAILS_SUCESS,
  payload,
});

export const clearUserDetails = () => ({
  type: UserActionTypes.CLEAR_DETAILS,
});
