import { RootState } from "../_dtypes";
import { createSelector } from "reselect";
import { reduce, keysIn } from "lodash";
import { IAlertData } from "./_dtypes";
import { combineBaseAndQuota, setAlertsKeyToBaseAndQuota } from "./alert.utils";

const selectAlerts = (state: RootState) => state.alerts;

const selectAlertsDataArr = createSelector(
  [selectAlerts],
  (alerts) => alerts.data
);

export const selectAlertsDataObj = createSelector(
  [selectAlertsDataArr],
  (alertsDataArr) =>
    reduce(
      alertsDataArr,
      (accObj, alertsData) => setAlertsKeyToBaseAndQuota(accObj, alertsData),
      {} as Record<string, IAlertData["alerts"]>
    )
);

export const selectAlertsDataObjKeys = createSelector(
  [selectAlertsDataObj],
  (alertsDataObj) => keysIn(alertsDataObj)
);
