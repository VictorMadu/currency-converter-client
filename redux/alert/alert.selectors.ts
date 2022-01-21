import { RootState } from "../_dtypes";
import { createSelector } from "reselect";
import { reduce, keysIn } from "lodash";
import { IAlertData } from "./_dtypes";

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
      (accObj, alertsData) => {
        // accObj.set(alertsData.id, alertsData.alerts);
        accObj[alertsData.id.base + " " + alertsData.id.quota] =
          alertsData.alerts;
        return accObj;
      },
      {} as Record<string, IAlertData["alerts"]>
    )
);

export const selectAlertsDataObjKeys = createSelector(
  [selectAlertsDataObj],
  (alertsDataObj) => keysIn(alertsDataObj)
);
