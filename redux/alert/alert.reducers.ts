import AlertActionTypes from "./alert.types";
import { IAlertDispatch, IAlertState } from "./_dtypes";

const INITIAL_STATE: IAlertState = {
  data: [],
  error: null,
};

const alertsReducer = (
  state = INITIAL_STATE,
  action: IAlertDispatch
): IAlertState => {
  switch (action.type) {
    case AlertActionTypes.FETCH_ALERTS_SUCCESS:
      return { ...state, data: action.payload };
    case AlertActionTypes.FETCH_ALERTS_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default alertsReducer;
