import { operatorMapping } from "./config";
import { queryType } from "./query-context";
import { RuleType } from "./types";

const filterRules = (rule: RuleType) => {
  if (rule.condition === "is-empty" && rule.field) {
    return true;
  }
  return rule.field && rule.condition && rule.criteria;
};

const concatenateRule = (rule: RuleType, query: string) => {
  if (rule.condition === "is-empty") {
    query += `(field.${rule.field}) ${operatorMapping[rule.condition]}`;
    return query;
  }
  query += `(field.${rule.field}) ${
    operatorMapping[rule.condition as keyof typeof operatorMapping]
  } "${rule.criteria}"`;
  return query;
};

export const generateQuery = (rules: RuleType[], condition: string): string => {
  const filteredRules = rules.filter((rule) => filterRules(rule));
  let query = "";
  for (let i = 0; i < filteredRules.length; i++) {
    const rule = filteredRules[i];
    query = concatenateRule(rule, query);
    if (i !== filteredRules.length - 1) {
      query += ` ${
        operatorMapping[condition as keyof typeof operatorMapping]
      } `;
    }
  }
  return query;
};

export const getCombinedQueryString = (query: queryType[] | undefined) => {
  let combinedQueryString = "";
  const queryLength = query?.length || 0;
  for (let i = 0; i <= queryLength - 1; i++) {
    if (query?.[i].queryString !== "") {
      combinedQueryString += `"${query?.[i].queryString}"`;
      if (i !== queryLength - 1) {
        combinedQueryString += " && ";
      }
    }
  }
  return combinedQueryString;
};
