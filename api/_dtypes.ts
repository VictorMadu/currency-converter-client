import { FromSchema } from "json-schema-to-ts";
import { currenciesalertSchema, currencyPricesSchema } from "./_schema";

export type ICurrencyPricesRes = FromSchema<typeof currencyPricesSchema>;
export type ICurrenciesAlertsRes = FromSchema<typeof currenciesalertSchema>;
