import "./assets/stylesheets/app.scss";

import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from 'react-router-redux'
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import CodeSplittingService from "./services/CodeSplittingService.js";

export default function App({ store, history }) {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
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

          <Route component={CodeSplittingService.scene("error/Error")} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}
