import './app.scss'
import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header/Header";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import CodeSplittingService from "./services/CodeSplittingService.js";

export default function App({ store, history }) {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <React.Fragment>
          <Header />

          <Switch>
            <Route
              path="/auth"
              component={CodeSplittingService.scene("auth/Auth")}
            />

            <Redirect exact from="/" to="/app" />
            <ProtectedRoute
              path="/app"
              component={CodeSplittingService.scene("dashboard/Dashboard")}
            />

            <Route component={CodeSplittingService.scene("error/Error")} />
          </Switch>
        </React.Fragment>
      </ConnectedRouter>
    </Provider>
  );
}
