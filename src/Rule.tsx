import React, { useEffect, useState } from "react";
import DustbinIcon from "./images/svg/dustbin.svg";
import { conditions, Criteria, fields } from "./config";
import {
  Common,
  Conditions,
  CriteriaType,
  Prediction,
  RuleType,
} from "./types";

/*
    TODO:
    Remove criteria if isEmpty or is not empty is selected
*/

interface Props {
  rule: RuleType;
  updateRule: Function;
  deleteRule: Function;
  totalRules: Number;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Rule = ({
  rule,
  updateRule,
  deleteRule,
  totalRules,
}: Props): JSX.Element => {
  const [field, setField] = useState("");
  const [condition, setCondition] = useState("");
  const [criteria, setCriteria] = useState("");

  useEffect(() => {
    if (condition === "is-empty") {
      return updateRule({ id: rule.id, field, condition, criteria });
    }
    if (field && condition && criteria) {
      updateRule({ id: rule.id, field, condition, criteria });
    }
  }, [field, condition, criteria]);

  return (
    <div className="mx-4 mt-4 rounded-sm">
      <form className="flex justify-start gap-x-2 rounded-sm flex-col lg:flex-row">
        <div className="flex flex-col lg:min-w-[250px] py-4 lg:py-0">
          <label
            htmlFor="field"
            className="text-white text-xs font-medium pb-2"
          >
            Field{" "}
          </label>
          <select
            name="field"
            id="field"
            onChange={(event) => setField(event.target.value)}
            value={field}
            className={`bg-white-0.1 px-3 py-2 ${
              field === "" ? "text-white-0.5" : "text-white"
            } font-medium rounded`}
          >
            <option value="" selected disabled hidden>
              Select field
            </option>
            <>
              {Object.keys(fields).map((group) => {
                return (
                  <optgroup label={group.toUpperCase()}>
                    {Object.keys(fields[group as keyof typeof fields]).map(
                      (item) => {
                        return (
                          <option value={item}>
                            {
                              fields[group as keyof typeof fields][
                                item as keyof (Prediction | Common)
                              ]
                            }
                          </option>
                        );
                      }
                    )}
                  </optgroup>
                );
              })}
            </>
          </select>
        </div>
        <div className="flex flex-col lg:min-w-[250px] py-4 lg:py-0">
          <label
            htmlFor="condition"
            className="text-white text-xs font-medium pb-2"
          >
            Condition{" "}
          </label>
          <select
            name="condition"
            id="condition"
            onChange={(event) => setCondition(event.target.value)}
            value={condition}
            className={classNames(
              condition === "" ? "text-white-0.5" : "text-white",
              "bg-white-0.1 px-3 py-2  font-medium rounded"
            )}
          >
            <option value="">Select condition</option>
            {Object.keys(conditions).map((condition) => (
              <option value={condition}>
                {conditions[condition as keyof Conditions]}
              </option>
            ))}
          </select>
        </div>
        {condition !== "is-empty" ? (
          <div className="flex flex-col lg:min-w-[250px] py-4 lg:py-0">
            <label
              htmlFor="criteria"
              className="text-white text-xs font-medium pb-2"
            >
              Criteria{" "}
            </label>
            <select
              name="criteria"
              id="criteria"
              onChange={(event) => setCriteria(event.target.value)}
              value={criteria}
              className={`bg-white-0.1 px-3 py-2 ${
                criteria === "" ? "text-white-0.5" : "text-white"
              } font-medium rounded`}
            >
              <option value="">Select field</option>
              {Object.keys(Criteria).map((criteria) => (
                <option value={criteria}>
                  {Criteria[criteria as keyof CriteriaType]}
                </option>
              ))}
            </select>
          </div>
        ) : null}
        {totalRules > 1 ? (
          <button
            className="text-white bg-white-0.1 rounded p-1 self-start lg:self-end w-max h-9 mt-2 lg:mt-0 justify-self-end"
            onClick={() => deleteRule({ id: rule.id })}
          >
            <img src={DustbinIcon} width="24px" height="24px" />
          </button>
        ) : null}
      </form>
    </div>
  );
};

export default Rule;
