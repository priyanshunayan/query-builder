import React from "react";
import Header from "./components/Header";
import { QueryProvider } from "./query-context";
import RuleGroup from "./components/RuleGroup";

export function App() {
  return (
    <QueryProvider>
      <div className="bg-neutral-900 min-h-screen">
        <Header />
        <RuleGroup />
      </div>
    </QueryProvider>
  );
}
