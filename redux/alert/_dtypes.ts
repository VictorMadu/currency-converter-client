import {
  fetchAlertsStart,
  fetchAlertsFailure,
  fetchAlertsSuccess,
  setAlertStart,
} from "./alert.actions";

export interface IAlertData {
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
}

export interface IAlertState {
  data: IAlertData[];
  error: string | null;
}

export type IAlertDispatch = ReturnType<
  | typeof fetchAlertsStart
  | typeof fetchAlertsSuccess
  | typeof fetchAlertsFailure
  | typeof setAlertStart
>;
