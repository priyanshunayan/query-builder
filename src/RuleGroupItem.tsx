import React, { useEffect, useState } from "react";
import { generateQuery } from "./helper";
import { useQuery } from "./query-context";
import Rule from "./Rule";
import { RuleType } from "./types";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const RuleGroupItem = ({ id }: { id: string }): JSX.Element => {
  const [rules, setRules] = useState<RuleType[]>([
    { field: "", condition: "", criteria: "", id: Date.now().toString() },
  ]);
  const [tabs, setTabs] = useState([
    { name: "AND", current: true },
    { name: "OR", current: false },
  ]);
  const { setQuery, query } = useQuery();

  useEffect(() => {
    const queryString = generateQuery(rules, getActiveTab());
    const filteredQuery = query?.map((q) =>
      q.id === id
        ? {
            rules: rules,
            condition: getActiveTab(),
            queryString: queryString,
            id: id,
          }
        : q
    );
    setQuery(filteredQuery);
  }, [rules, tabs]);
  function addRule({
    field,
    condition,
    criteria,
  }: {
    field: string;
    condition: string;
    criteria: string;
  }) {
    const newRules = [
      ...rules,
      { field, condition, criteria, id: Date.now().toString() },
    ];
    setRules(newRules);
  }
  function updateRule({
    field,
    condition,
    criteria,
    id,
  }: {
    field: string;
    condition: string;
    criteria: string;
    id: string;
  }) {
    const updatedRules = rules.map((rule) =>
      rule.id === id ? { field, condition, criteria, id } : rule
    );
    setRules(updatedRules);
  }

  function deleteRule({ id }: { id: string }) {
    const updatedRules = rules.filter((rule) => rule.id !== id);
    setRules(updatedRules);
  }

  function addFilter() {
    addRule({ field: "", condition: "", criteria: "" });
  }

  function updateQueryCondition(name: string) {
    const updatedTabs = tabs.map((tab) =>
      tab.name === name
        ? { name: tab.name, current: true }
        : { name: tab.name, current: false }
    );
    setTabs(updatedTabs);
  }
  function getActiveTab() {
    const activeTab = tabs.find((tab) => tab.current);
    if (!activeTab) {
      return "AND";
    }
    return activeTab.name;
  }
  return (
    <div className="m-4 mb-0 border border-light-gray rounded ">
      <nav
        className="relative z-0 rounded-lg shadow flex mt-2 ml-2 border border-light-gray w-fit"
        aria-label="Tabs"
      >
        {rules.length > 1
          ? tabs.map((tab, tabIdx) => (
              <button
                key={tab.name}
                className={classNames(
                  tab.current ? "bg-custom-indigo rounded" : " dark-bg rounded",
                  tabIdx === 0 ? "rounded-l-sm" : "",
                  tabIdx === tabs.length - 1 ? "rounded-r-sm" : "",
                  "font-semibold text-white group relative min-w-0 overflow-hidden py-2 px-4 text-sm text-center focus:z-10"
                )}
                onClick={() => updateQueryCondition(tab.name)}
              >
                <span>{tab.name}</span>
              </button>
            ))
          : null}
      </nav>
      <div>
        {rules.map((rule) => (
          <Rule
            rule={rule}
            key={rule.id}
            updateRule={updateRule}
            deleteRule={deleteRule}
            totalRules={rules.length}
          />
        ))}
      </div>
      <button
        className="bg-indigo-500 py-2 px-4 text-white my-2 ml-4 rounded-md text-sm mt-8 mb-4"
        onClick={addFilter}
      >
        + Add Filter
      </button>
    </div>
  );
};

export default RuleGroupItem;
