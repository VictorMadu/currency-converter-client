import {
  createCurrencyWebSocketConnection,
  generateCurrencyWebSocketTicket,
} from ".";
import { CurrencyWSRes } from "./_dtypes";
import * as _ from "lodash";

type IPriceUpdateListener = (payload: {
  base: string;
  currencies: {
    name: string;
    short: string;
    prev_rate: number;
    curr_rate: number;
  }[];
}) => void;

export type IPriceAlertListener = (payload: {
  alertId: string;
  msg: string;
  base: string;
  quota: string;
  triggeredTime: string;
}) => void;

export class CurrencyWS {
  private static instance: Promise<CurrencyWS | null> | null;
  private priceUpdateListeners: IPriceUpdateListener[] = [];
  private priceAlertListeners: IPriceAlertListener[] = [];

  constructor(private ws: WebSocket) {
    // TODO: handle if string or arraybuffer. Or make it arraybuffer and parse when creating class instance
    ws.onopen = () => console.log("Successfully connected");
    ws.onmessage = (payload) => {
      const parsedData = JSON.parse(payload.data) as CurrencyWSRes;
      switch (parsedData.type) {
        case "price-update-settings":
          return;
        case "price-update":
          return _.map(this.priceUpdateListeners, (priceUpdateListener) =>
            priceUpdateListener(parsedData.data)
          );
        case "price-alert":
          return _.map(this.priceAlertListeners, (priceAlertListener) =>
            priceAlertListener(parsedData.data)
          );
        default:
          break;
      }
    };
  }

  static async getInstance(token: string) {
    if (!CurrencyWS.instance) {
      CurrencyWS.instance = this.createInstance(token);
    }
    return CurrencyWS.instance;
  }

  private static async createInstance(token: string) {
    const isSuccess = await generateCurrencyWebSocketTicket({ token });
    if (!isSuccess) return null;
    const ws = await createCurrencyWebSocketConnection();
    return new CurrencyWS(ws);
  }

  subscribePriceUpdate(priceUpdateListener: IPriceUpdateListener) {
    const index = this.priceUpdateListeners.push(priceUpdateListener);
    return () => this.priceUpdateListeners.splice(index, 1);
  }

  subscribePriceAlert(priceAlertListener: IPriceAlertListener) {
    const index = this.priceAlertListeners.push(priceAlertListener);
    return () => this.priceAlertListeners.splice(index, 1);
  }

  updatePriceUpdateSetting(payload: { base?: string; quotas?: string[] }) {
    this.ws.send(
      JSON.stringify({ type: "price-update-settings", data: payload })
    );
  }

  close() {
    this.ws && this.ws.close();
    CurrencyWS.instance = null;
  }
}
