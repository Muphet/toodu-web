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
        <div className="app">
          <Header />
          <main className="app__main">
            <Switch>
              <Redirect exact from="/" to="/app" />
              <ProtectedRoute
                path="/app"
                component={CodeSplittingService.scene("dashboard/Dashboard")}
              />
              <ProtectedRoute
                path="/settings"
                component={CodeSplittingService.scene("settings/Settings")}
              />
              <Route
                path="/auth"
                component={CodeSplittingService.scene("auth/Auth")}
              />
              <Route component={CodeSplittingService.scene("error/Error")} />
            </Switch>
          </main>
        </div>
      </ConnectedRouter>
    </Provider>
  );
}
