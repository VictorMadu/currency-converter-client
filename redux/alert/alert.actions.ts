import AlertActionTypes from "./alert.types";

export const fetchAlertsSuccess = (
  payload: {
    id: {
      base: string;
      quota: string;
    };
    alerts: {
      id: string;
      set_rate: number;
      set_time: {
        day: number;
        month: number;
        year: number;
      };
      target_rate: number;
      triggered_rate?: number;
      triggered_time: {
        day: number | null;
        month: number | null;
        year: number | null;
      };
    }[];
  }[]
) => ({
  type: AlertActionTypes.FETCH_ALERTS_SUCCESS,
  payload,
});

export const fetchAlertsStart = (payload: {
  token: string;
  bases?: string[] | undefined;
  quotas?: string[] | undefined;
  type?: "pending" | "triggered" | undefined;
}) => ({
  type: AlertActionTypes.FETCH_ALERTS_START,
  payload,
});

export const fetchAlertsFailure = (payload: string) => ({
  type: AlertActionTypes.FETCH_ALERTS_FAILURE,
  payload,
});

export const setAlertStart = (
  payload: { token: string; base: string; quota: string; targetRate: number },
  cb?: (success: boolean) => void
) => ({
  type: AlertActionTypes.SET_ALERT_START,
  payload,
  cb,
});
