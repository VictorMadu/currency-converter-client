import { FromSchema } from "json-schema-to-ts";
import {
  changeSettingsSchema,
  createCurrencyAlertSchema,
  currenciesalertSchema,
  currencyPricesSchema,
  loginSchema,
  signUpSchema,
} from "./_schema";

export type ICurrencyPricesRes = FromSchema<typeof currencyPricesSchema>;
export type ICurrenciesAlertsRes = FromSchema<typeof currenciesalertSchema>;
export type ISignUpRes = FromSchema<typeof signUpSchema>;
export type ILoginRes = FromSchema<typeof loginSchema>;
export type ICreateCurrencyAlertRes = FromSchema<
  typeof createCurrencyAlertSchema
>;
export type IChangeSettingRes = FromSchema<typeof changeSettingsSchema>;

interface ICurPriceUpdateSettingsRes {
  type: "price-update-settings";
  data: { success: boolean };
}

interface ICurPriceUpdateRes {
  type: "price-update";
  data: {
    base: string;
    currencies: {
      name: string;
      short: string;
      prev_rate: number;
      curr_rate: number;
    }[];
  };
}

interface IPriceAlertRes {
  type: "price-alert";
  data: {
    alertId: string;
    msg: string;
    base: string;
    quota: string;
    triggeredTime: string;
  };
}
export type CurrencyWSRes =
  | ICurPriceUpdateSettingsRes
  | ICurPriceUpdateRes
  | IPriceAlertRes;
