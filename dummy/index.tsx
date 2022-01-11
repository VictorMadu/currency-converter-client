export const countryDetail = {
  flagImg: "",
  fullCurrencyName: "Nigerian Naira",
  shorCurrencyName: "NGN",
};

export interface ICurrencyPairsTable {
  id: string | number;
  baseFlag: string;
  quotaFlag: string;
  baseAbbrev: string;
  quotaAbbrev: string;
  prevPrice: number;
  currPrice: number;
  alerts?:
    | Array<{
        id: string | number;
        targetPrice: number;
        setDate: string;
        triggedDate?: string;
      }>;
}

export const currencyPairsTable: Array<ICurrencyPairsTable> = [
  {
    id: 1,
    baseFlag: "",
    quotaFlag: "",
    baseAbbrev: "USD",
    quotaAbbrev: "NGN",
    prevPrice: 490,
    currPrice: 500.083957,
    alerts: [
      {
        id: "1",
        targetPrice: 435.341845,
        setDate: "12/11/2021",
        triggedDate: "15/11/2021",
      },
      {
        id: 13,
        targetPrice: 430.341845,
        setDate: "12/11/2021",
        triggedDate: "15/11/2021",
      },
      {
        id: 16,
        targetPrice: 484.341845,
        setDate: "12/11/2021",
        triggedDate: "15/11/2021",
      },
      { id: 15, targetPrice: 500.341845, setDate: "12/11/2021" },
      { id: 176, targetPrice: 495.341845, setDate: "12/11/2021" },
      { id: 154, targetPrice: 600.0, setDate: "11/10/2021" },
    ],
  },
  {
    id: 2,
    baseFlag: "",
    quotaFlag: "",
    baseAbbrev: "USD",
    quotaAbbrev: "NGN",
    prevPrice: 400,
    currPrice: 380.083957,
    alerts: [
      {
        id: 14654,
        targetPrice: 435.341845,
        setDate: "12/11/2021",
        triggedDate: "15/11/2021",
      },
      {
        id: 15654,
        targetPrice: 430.341845,
        setDate: "12/11/2021",
        triggedDate: "15/11/2021",
      },
      {
        id: 43221,
        targetPrice: 484.341845,
        setDate: "12/11/2021",
        triggedDate: "15/11/2021",
      },
      { id: 14314, targetPrice: 500.341845, setDate: "12/11/2021" },
      { id: 6551, targetPrice: 495.341845, setDate: "12/11/2021" },
      { id: 1673, targetPrice: 600.0, setDate: "11/10/2021" },
    ],
  },
  {
    id: 3,
    baseFlag: "",
    quotaFlag: "",
    baseAbbrev: "USD",
    quotaAbbrev: "NGN",
    prevPrice: 45,
    currPrice: 39.533345,
    alerts: [
      {
        id: 443,
        targetPrice: 435.341845,
        setDate: "12/11/2021",
        triggedDate: "15/11/2021",
      },
      {
        id: 57631,
        targetPrice: 430.341845,
        setDate: "12/11/2021",
        triggedDate: "15/11/2021",
      },
      {
        id: 145660,
        targetPrice: 484.341845,
        setDate: "12/11/2021",
        triggedDate: "15/11/2021",
      },
      { id: 1554595, targetPrice: 500.341845, setDate: "12/11/2021" },
      { id: 13435408, targetPrice: 495.341845, setDate: "12/11/2021" },
      { id: 14304389473, targetPrice: 600.0, setDate: "11/10/2021" },
    ],
  },
  {
    id: 4,
    baseFlag: "",
    quotaFlag: "",
    baseAbbrev: "USD",
    quotaAbbrev: "NGN",
    prevPrice: 400,
    currPrice: 500.083957,
    alerts: [
      {
        id: 232,
        targetPrice: 435.341845,
        setDate: "12/11/2021",
        triggedDate: "15/11/2021",
      },
      {
        id: 545,
        targetPrice: 430.341845,
        setDate: "12/11/2021",
        triggedDate: "15/11/2021",
      },
      {
        id: 67,
        targetPrice: 484.341845,
        setDate: "12/11/2021",
        triggedDate: "15/11/2021",
      },
      { id: 456, targetPrice: 500.341845, setDate: "12/11/2021" },
      { id: 956, targetPrice: 495.341845, setDate: "12/11/2021" },
      { id: 506, targetPrice: 600.0, setDate: "11/10/2021" },
    ],
  },
  {
    id: 5,
    baseFlag: "",
    quotaFlag: "",
    baseAbbrev: "USD",
    quotaAbbrev: "NGN",
    prevPrice: 400,
    currPrice: 500.083957,
  },
  {
    id: 6,
    baseFlag: "",
    quotaFlag: "",
    baseAbbrev: "USD",
    quotaAbbrev: "NGN",
    prevPrice: 400,
    currPrice: 500.083957,
  },
  {
    id: 7,
    baseFlag: "",
    quotaFlag: "",
    baseAbbrev: "USD",
    quotaAbbrev: "NGN",
    prevPrice: 400,
    currPrice: 500.083957,
  },
  {
    id: 8,
    baseFlag: "",
    quotaFlag: "",
    baseAbbrev: "USD",
    quotaAbbrev: "NGN",
    prevPrice: 400,
    currPrice: 500.083957,
  },
  {
    id: 11,
    baseFlag: "",
    quotaFlag: "",
    baseAbbrev: "USD",
    quotaAbbrev: "NGN",
    prevPrice: 400,
    currPrice: 500.083957,
  },
  {
    id: 21,
    baseFlag: "",
    quotaFlag: "",
    baseAbbrev: "USD",
    quotaAbbrev: "NGN",
    prevPrice: 400,
    currPrice: 500.083957,
    alerts: [
      {
        id: 7041,
        targetPrice: 435.341845,
        setDate: "12/11/2021",
        triggedDate: "15/11/2021",
      },
      {
        id: 585,
        targetPrice: 430.341845,
        setDate: "12/11/2021",
        triggedDate: "15/11/2021",
      },
      {
        id: 465,
        targetPrice: 484.341845,
        setDate: "12/11/2021",
        triggedDate: "15/11/2021",
      },
      { id: 963, targetPrice: 500.341845, setDate: "12/11/2021" },
      { id: 9809901, targetPrice: 495.341845, setDate: "12/11/2021" },
      { id: 38505, targetPrice: 600.0, setDate: "11/10/2021" },
    ],
  },
  {
    id: 31,
    baseFlag: "",
    quotaFlag: "",
    baseAbbrev: "USD",
    quotaAbbrev: "NGN",
    prevPrice: 400,
    currPrice: 500.083957,
  },
  {
    id: 41,
    baseFlag: "",
    quotaFlag: "",
    baseAbbrev: "USD",
    quotaAbbrev: "NGN",
    prevPrice: 400,
    currPrice: 500.083957,
  },
  {
    id: 51,
    baseFlag: "",
    quotaFlag: "",
    baseAbbrev: "USD",
    quotaAbbrev: "NGN",
    prevPrice: 400,
    currPrice: 500.083957,
    alerts: [
      {
        id: 1323,
        targetPrice: 435.341845,
        setDate: "12/11/2021",
        triggedDate: "15/11/2021",
      },
      {
        id: 200,
        targetPrice: 430.341845,
        setDate: "12/11/2021",
        triggedDate: "15/11/2021",
      },
      {
        id: 300,
        targetPrice: 484.341845,
        setDate: "12/11/2021",
        triggedDate: "15/11/2021",
      },
      { id: 400, targetPrice: 500.341845, setDate: "12/11/2021" },
      { id: 1044, targetPrice: 495.341845, setDate: "12/11/2021" },
      { id: 11111, targetPrice: 600.0, setDate: "11/10/2021" },
    ],
  },
  {
    id: 61,
    baseFlag: "",
    quotaFlag: "",
    baseAbbrev: "USD",
    quotaAbbrev: "NGN",
    prevPrice: 400,
    currPrice: 500.083957,
  },
  {
    id: 71,
    baseFlag: "",
    quotaFlag: "",
    baseAbbrev: "USD",
    quotaAbbrev: "NGN",
    prevPrice: 400,
    currPrice: 500.083957,
  },
  {
    id: 81,
    baseFlag: "",
    quotaFlag: "",
    baseAbbrev: "USD",
    quotaAbbrev: "NGN",
    prevPrice: 400,
    currPrice: 500.083957,
    alerts: [
      {
        id: 14678,
        targetPrice: 435.341845,
        setDate: "12/11/2021",
        triggedDate: "15/11/2021",
      },
      {
        id: 435435,
        targetPrice: 430.341845,
        setDate: "12/11/2021",
        triggedDate: "15/11/2021",
      },
      {
        id: 13456465,
        targetPrice: 484.341845,
        setDate: "12/11/2021",
        triggedDate: "15/11/2021",
      },
      { id: 153223, targetPrice: 500.341845, setDate: "12/11/2021" },
      { id: 167657, targetPrice: 495.341845, setDate: "12/11/2021" },
      { id: 4356, targetPrice: 600.0, setDate: "11/10/2021" },
    ],
  },
];
