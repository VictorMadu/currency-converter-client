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
          short: { type: "string" },
          name: { type: "string" },
          pending_alerts: {
            type: "array",
            items: {
              type: "object",
              properties: {
                quota_short: { type: "string" },
                quota_name: { type: "string" },
                set_time: { type: "string" },
                set_rate: { type: "number" },
                target_rate: { type: "number" },
                prev_rate: { type: "number" },
                curr_rate: { type: "number" },
              },
              required: [
                "quota_short",
                "quota_name",
                "set_time",
                "set_rate",
                "target_rate",
                "prev_rate",
                "curr_rate",
              ],
              additionalProperties: false,
            },
          },

          triggered_alerts: {
            type: "array",
            items: {
              type: "object",
              properties: {
                quota_short: { type: "string" },
                quota_name: { type: "string" },
                set_time: { type: "string" },
                set_rate: { type: "number" },
                target_rate: { type: "number" },
                triggered_rate: { type: "number" },
                triggered_time: { type: "string" },
                prev_rate: { type: "number" },
                curr_rate: { type: "number" },
              },
              required: [
                "quota_short",
                "quota_name",
                "set_time",
                "set_rate",
                "target_rate",
                "triggered_time",
                "triggered_rate",
                "prev_rate",
                "curr_rate",
              ],
              minContains: 0,
              additionalProperties: false,
            },
          },
        },
        required: ["short", "name"],
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
      },
      required: ["id", "email", "phone", "token"],
      additionalProperties: false,
    },
  },
  required: ["success"],
  additionalProperties: false,
} as const;
