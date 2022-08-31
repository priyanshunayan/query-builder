import React, { ReactNode, useState } from "react";
import { Rule, RuleType } from "./types";

interface queryType {
  rules: RuleType[] | undefined;
  condition: string | undefined;
  queryString: string | undefined;
  id: string;
}

const QueryContext = React.createContext<
  | {
      query: queryType[] | undefined;
      setQuery: React.Dispatch<React.SetStateAction<queryType[] | undefined>>;
    }
  | undefined
>(undefined);

function QueryProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState<queryType[] | undefined>();
  const value = {
    query: query,
    setQuery: setQuery,
  };
  return (
    <QueryContext.Provider value={value}> {children} </QueryContext.Provider>
  );
}

function useQuery() {
  const context = React.useContext(QueryContext);
  if (context === undefined) {
    throw new Error("useQuery must be used within a QueryProvider");
  }
  return context;
}

export { QueryProvider, useQuery };
