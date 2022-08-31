import React, { useEffect, useState } from "react";
import { generateQuery } from "../helper";
import { useQuery } from "../query-context";

import RuleGroupItem from "./RuleGroupItem";

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
    <div className="max-w-[908px] mx-auto relative">
      <div className="relative">
        {query &&
          query?.map((q) => (
            <>
              <RuleGroupItem id={q.id} />
              <div className="absolute left-6 h-5 border ml-4 border-emperor" />
            </>
          ))}
      </div>

      <button
        className="bg-indigo-500 py-2 px-4 text-white my-2 ml-4 rounded-md text-sm mt-5 mb-4"
        onClick={addGroup}
      >
        + Add new group filter
      </button>
    </div>
  );
};

export default RuleGroup;
