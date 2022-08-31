import React, { useEffect, useState } from "react";
import { generateQuery } from "./helper";
import { useQuery } from "./query-context";

import RuleGroupItem from "./RuleGroupItem";
import { RuleType } from "./types";

const tabs = [
  { name: "AND", current: true },
  { name: "OR", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const RuleGroup = (): JSX.Element => {
  const { setQuery, query } = useQuery();
  const defaultRules = [
    { field: "", condition: "", criteria: "", id: Date.now().toString() },
  ];

  const defaultQuery = {
    rules: defaultRules,
    condition: "",
    queryString: "",
    id: Date.now().toString(),
  };
  useEffect(() => {
    setQuery([defaultQuery]);
  }, []);

  function addGroup() {
    if (query) {
      setQuery([...query, defaultQuery]);
    } else {
      setQuery([defaultQuery]);
    }
  }

  return (
    <div className="max-w-[908px] mx-auto">
      {query && query?.map((q) => <RuleGroupItem id={q.id} />)}
      <button
        className="bg-indigo-500 py-2 px-4 text-white my-2 ml-4 rounded-md text-sm mt-8 mb-4"
        onClick={addGroup}
      >
        + Add Group
      </button>
    </div>
  );
};

export default RuleGroup;
