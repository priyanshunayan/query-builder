import { Conditions, CriteriaType, Fields } from "./types";

export const fields: Fields = {
  prediction: {
    theme: "Themes",
    subTheme: "Sub-theme",
    reason: "Reason",
    language: "Language",
    source: "Source",
    rating: "Rating",
    timePeriod: "Time Period",
  },
  common: {
    customerId: "Customer Id",
  },
};

export const conditions: Conditions = {
  equal: "Equals",
  "does-not-equal": "Does not equal",
  like: "Like",
  "not-like": "Not like",
  "is-empty": "Is empty",
  is: "Is",
  "is-not": "Is not",
};

export const Criteria: CriteriaType = {
  Offers: "Offers",
  Performance: "Performance",
  Platform: "Platform",
  "Product Feedback": "Product Feedback",
};

export const operatorMapping = {
  equal: "==",
  "does-not-equal": "!=",
  like: "LIKE",
  "not-like": "NOT LIKE",
  "is-empty": "IS NULL",
  is: "IS",
  "is-not": "NOT-IS",
  AND: "&&",
  OR: "||",
};
