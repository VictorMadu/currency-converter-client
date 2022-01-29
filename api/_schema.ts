export const currencyPricesSchema = {
  type: "object",
  properties: {
    success: { type: "boolean" },
    data: {
      type: "object",
      properties: {
        base: { type: "string" },
        currencies: {
          type: "array",
          items: {
            type: "object",
            properties: {
              short: { type: "string" },
              name: { type: "string" },
              prev_rate: { type: "number" },
              curr_rate: { type: "number" },
            },
            additionalProperties: false,
            required: ["short", "name", "prev_rate", "curr_rate"],
          },
        },
      },
      required: ["base", "currencies"],
      additionalProperties: false,
    },
  },
  required: ["success", "data"],
  additionalProperties: false,
} as const;

export const currenciesalertSchema = {
  type: "object",
  properties: {
    success: { type: "boolean" },
    data: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: {
            type: "object",
            properties: {
              base: { type: "string" },
              quota: { type: "string" },
            },
            required: ["base", "quota"],
            additionalProperties: false,
          },
          alerts: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: { type: "string" },
                set_rate: { type: "number" },
                set_time: {
                  type: "object",
                  properties: {
                    day: { type: "number" },
                    month: { type: "number" },
                    year: { type: "number" },
                  },
                  required: ["day", "month", "year"],
                  additionalProperties: false,
                },
                target_rate: { type: "number" },
                triggered_rate: { type: "number" },
                triggered_time: {
                  type: "object",
                  properties: {
                    day: { type: ["number", "null"] },
                    month: { type: ["number", "null"] },
                    year: { type: ["number", "null"] },
                  },
                  required: ["day", "month", "year"],
                  additionalProperties: false,
                },
              },
              required: [
                "id",
                "set_rate",
                "set_time",
                "target_rate",
                "triggered_time",
              ],
              additionalProperties: false,
            },
          },
        },
        required: ["id", "alerts"],
        additionalProperties: false,
      },
    },
  },
  required: ["success", "data"],
  additionalProperties: false,
} as const;

export const signUpSchema = {
  type: "object",
  properties: {
    success: { type: "boolean" },
    data: {
      type: "object",
      properties: {
        id: { type: "string" },
        createdTime: { type: "number" },
      },
      required: ["id", "createdTime"],
      additionalProperties: false,
    },
  },
  required: ["success"],
  additionalProperties: false,
} as const;

export const loginSchema = {
  type: "object",
  properties: {
    success: { type: "boolean" },
    data: {
      type: "object",
      properties: {
        id: { type: "string" },
        email: { type: "string" },
        phone: { type: "string" },
        token: { type: "string" },
        app_theme: { enum: ["light", "dark"] },
        notify_opts: {
          type: "array",
          items: { enum: ["app", "phone", "email"] },
          minItems: 1,
          uniqueItems: true,
        },
      },
      required: ["id", "email", "phone", "token"],
      additionalProperties: false,
    },
  },
  required: ["success"],
  additionalProperties: false,
} as const;

export const createCurrencyAlertSchema = {
  type: "object",
  properties: {
    success: { type: "boolean" },
  },
  required: ["success"],
  additionalProperties: false,
} as const;

export const changeSettingsSchema = {
  type: "object",
  properties: {
    success: { type: "boolean" },
    data: {
      type: "object",
      properties: {
        modifiedCount: { type: "number" },
        user: {
          type: "object",
          properties: {
            app_theme: { enum: ["light", "dark"] },
            notify_opts: {
              type: "array",
              items: { enum: ["app", "phone", "email"] },
              minItems: 1,
              uniqueItems: true,
            },
          },
          additionalProperties: false,
        },
      },
      required: ["modifiedCount"],
      additionalProperties: false,
    },
  },
  required: ["success", "data"],
  additionalProperties: false,
} as const;
