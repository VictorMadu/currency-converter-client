import { createSelector } from "reselect";
import { RootState } from "../_dtypes";

const selectUser = (state: RootState) => {
  return state.user;
};

export const selectToken = createSelector([selectUser], (user) => user.token);
