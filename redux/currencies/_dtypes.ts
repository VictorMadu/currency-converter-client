export interface ICurrencies {
  data: {
    base: string;
    currencies: {
      short: string;
      name: string;
      prev_rate: number;
      curr_rate: number;
    }[];
  };
  errorMsg?: string;
}
