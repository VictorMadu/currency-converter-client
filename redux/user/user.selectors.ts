import { createSelector } from "reselect";
import { RootState } from "../_dtypes";

const selectUser = (state: RootState) => {
  return state.user;
};

const selectUserData = createSelector([selectUser], (user) => user.data);

export const selectUserToken = createSelector(
  [selectUserData],
  (userData) => userData.token
);

export const selectUserAppTheme = createSelector(
  [selectUserData],
  (userData) => userData.app_theme
);

export const selectUserNotifyOpts = createSelector(
  [selectUserData],
  (userData) => userData.notify
);
