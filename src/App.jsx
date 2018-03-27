import "./assets/stylesheets/app.scss";

import React from "react";
import { Provider } from "react-redux";
import Loadable from "react-loadable";
import { Router, Route, Switch } from "react-router-dom";
import configureStore from "./store";
import HistoryService from "./services/HistoryService.js";
import SceneLoader from "./components/sceneLoader/SceneLoader";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";

const asyncScene = path =>
  Loadable({
    loader: () => import(`./scenes/${path}`),
    loading: SceneLoader
  });

export default function App() {
  return (
    <Provider store={configureStore()}>
      <Router history={HistoryService.get()}>
        <Switch>
          <ProtectedRoute
            exact
            path="/"
            component={asyncScene("dashboard/Dashboard")}
          />
          <Route path="/auth" component={asyncScene("auth/Auth")} />
          <Route component={asyncScene("notFound/NotFound")} />
        </Switch>
      </Router>
    </Provider>
  );
}
