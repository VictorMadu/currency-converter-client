import UserActionTypes from "./user.types";
import { IUserDetails } from "./_dtypes";

const INITIAL_STATE: IUserDetails = {
  email: "",
  phone: "",
  token: "",
};

const userReducer = (
  state = INITIAL_STATE,
  action: { type: UserActionTypes; payload: Partial<IUserDetails> }
) => {
  switch (action.type) {
    case UserActionTypes.SET_DETAILS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default userReducer;
