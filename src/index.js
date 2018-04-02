import React from "react";
import ReactDOM from "react-dom";
import ServiceWorkerService from "./services/ServiceWorkerService";
import HistoryService from "./services/HistoryService.js";
import AuthService from "./services/AuthService.js";
import configureStore from "./store";
import App from "./App";

const store = configureStore();
const history = HistoryService.get();

ReactDOM.render(
  <App store={store} history={history} />,
  document.getElementById("root")
);

ServiceWorkerService.register();
