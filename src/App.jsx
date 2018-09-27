import React from "react";
import PropTypes from 'prop-types';
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import SceneLoader from "./components/sceneLoader/SceneLoader";
import Header from "./components/header/Header";
import ModalRoot from "./components/modalRoot/ModalRoot";
import ToastsRoot from "./components/toastsRoot/ToastsRoot";
import OfflineNotice from "./components/offlineNotice/OfflineNotice";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import CodeSplittingService from "./services/CodeSplittingService.js";

function App({ store, persistor, history }) {
  return (
    <Provider store={store}>
      <PersistGate loading={<SceneLoader />} persistor={persistor}>
        <ConnectedRouter history={history}>
          <AppRouter />
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
}

const AppRouter = withRouter(({ location }) => {
  const isAuthScene = /(^\/auth)/.test(location.pathname);

  return (
    <div className="app">
      { !isAuthScene && <Header /> }
      <main className="app__main">
        <Switch>
          <Redirect exact from="/" to="/dashboard" />
          <ProtectedRoute
            path="/dashboard"
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
      <ModalRoot />
      <ToastsRoot />
      <OfflineNotice />
    </div>
  )
})

App.propTypes = {
  store: PropTypes.object.isRequired,
  persistor: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default App;
