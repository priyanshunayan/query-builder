import ReactDOM from "react-dom";
import { App } from "./App";
import { QueryProvider, useQuery } from "./query-context";
import "./main.css";

const app = document.getElementById("app");
ReactDOM.render(<App />, app);

export { QueryProvider, useQuery, App };
