import ReactDOM from "react-dom";
import { App } from "./App";
import React from "react";
import { QueryProvider, useQuery } from "./query-context";

const app = document.getElementById("app");
ReactDOM.render(<App />, app);

export { QueryProvider, useQuery, App };
