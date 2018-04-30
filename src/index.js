import "./assets/styles/toodu.scss";
import React from "react";
import ReactDOM from "react-dom";
import createHistory from "history/createBrowserHistory";
import ServiceWorkerService from "./services/ServiceWorkerService";
import configureStore from "./store";
import App from "./App";

const history = createHistory();
const store = configureStore(history);

ReactDOM.render(
  <App store={store} history={history} />,
  document.getElementById("root")
);

ServiceWorkerService.register();
