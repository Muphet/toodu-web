import "./assets/stylesheets/app.scss";

import React from "react";
import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import DialogRoot from "./components/dialogRoot/DialogRoot";
import CodeSplittingService from "./services/CodeSplittingService.js";

export default function App({ store, history }) {
  return (
    <Provider store={store}>
      <React.Fragment>
        <DialogRoot />
        <Router history={history}>
          <Switch>
            <ProtectedRoute
              exact
              path="/"
              component={CodeSplittingService.scene("dashboard/Dashboard")}
            />
            <Route
              path="/auth"
              component={CodeSplittingService.scene("auth/Auth")}
            />

            <Route
              component={CodeSplittingService.scene("notFound/NotFound")}
            />
          </Switch>
        </Router>
      </React.Fragment>
    </Provider>
  );
}
