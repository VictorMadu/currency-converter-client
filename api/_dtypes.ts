import { FromSchema } from "json-schema-to-ts";
import {
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
