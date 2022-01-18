import UserActionTypes from "./user.types";
import { IUserDetails } from "./_dtypes";

const INITIAL_STATE: IUserDetails = {
  email: "",
  phone: "",
  token: "",
};

const userReducer = (
  state = INITIAL_STATE,
  action: { type: UserActionTypes; payload: any }
) => {
  switch (action.type) {
    case UserActionTypes.FETCH_DETAILS_SUCESS:
      return { ...state, ...action.payload };
    case UserActionTypes.CLEAR_DETAILS:
      return {};
    default:
      return state;
  }
};

export default userReducer;
