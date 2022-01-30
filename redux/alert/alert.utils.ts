import { IAlertData } from "./_dtypes";

const CURRENCY_PAIR_SEPERATOR = "__&&__";
export const combineBaseAndQuota = (base: string, quota: string) => {
  return base + CURRENCY_PAIR_SEPERATOR + quota;
};

export const splitBaseAndQuota = (combinedBaseAndQuota: string) => {
  const splitted = combinedBaseAndQuota.split(
    CURRENCY_PAIR_SEPERATOR
  ) as string[];
  // might remove this for speed purpose
  // if (splitted.length !== 2)
  //   throw new Error("Invalid base and quota combination");
  return splitted;
};

export const setAlertsKeyToBaseAndQuota = (
  allAlerts: Record<string, IAlertData["alerts"]>,
  alert: IAlertData
) => {
  allAlerts[combineBaseAndQuota(alert.id.base, alert.id.quota)] =
    alert["alerts"];
  return allAlerts;
};
