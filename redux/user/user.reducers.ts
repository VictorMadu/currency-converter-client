import UserActionTypes from "./user.types";
import { IUserDispatch, IUserState } from "./_dtypes";

const INITIAL_STATE: IUserState = {
  data: {
    email: "",
    phone: "",
    token: "",
    notify: [],
    app_theme: "light",
  },
};

const userReducer = (
  state = INITIAL_STATE,
  action: IUserDispatch
): IUserState => {
  switch (action.type) {
    case UserActionTypes.LOGIN_IN_SUCCESS:
      return { ...state, data: { ...state.data, ...action.payload } };
    case UserActionTypes.CHANGE_SETTING_SUCCESS:
      return { ...state, data: { ...state.data, ...action.payload } };
    case UserActionTypes.CLEAR_DETAILS:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default userReducer;
