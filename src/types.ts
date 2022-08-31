export interface RuleType {
  field: string;
  condition: string;
  criteria: string;
  id: string;
}

export interface Fields {
  prediction: Prediction;
  common: Common;
}

export interface Prediction {
  theme: string;
  subTheme: string;
  reason: string;
  language: string;
  source: string;
  rating: string;
  timePeriod: string;
}

export interface Common {
  customerId: string;
}
export interface Conditions {
  equal: string;
  "does-not-equal": string;
  like: string;
  "not-like": string;
  "is-empty": string;
  is: string;
  "is-not": string;
}

export interface CriteriaType {
  Offers: string;
  Performance: string;
  Platform: string;
  "Product Feedback": string;
}

// todo tighten type
export interface Rule {
  field: string;
  condition: string;
  value?: string;
}
