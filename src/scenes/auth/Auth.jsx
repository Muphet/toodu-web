import React, { Component } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import ProtectedRoute from "../../components/protectedRoute/ProtectedRoute";
import Login from "./scenes/login/Login";
import Signup from "./scenes/signup/Signup";
import Verified from "./scenes/verified/Verified";
import Logout from "./scenes/logout/Logout";
import ForgotPassword from "./scenes/forgotPassword/ForgotPassword";
import ResetPassword from "./scenes/resetPassword/ResetPassword";
import Invited from "./scenes/invited/Invited";

export default class Auth extends Component {
  static propTypes = {};

  render() {
    return (
      <main className="container container--background content content--stacked content--center">
        <header className="authHeader">
          <h1 className="authHeader__title">
            <Link to="/dashboard"> Toodu </Link>
          </h1>
        </header>
        
        <Switch>
          <Route exact path="/auth/login" component={Login} />
          <Route exact path="/auth/signup" component={Signup} />
          <ProtectedRoute
            exact
            getAuthFromUrl
            path="/auth/verified"
            component={Verified}
          />
          <Route exact path="/auth/logout" component={Logout} />
          <Route exact path="/auth/invited" component={Invited} />
          <Route
            exact
            path="/auth/forgot-password"
            component={ForgotPassword}
          />
          <ProtectedRoute
            exact
            getAuthFromUrl
            path="/auth/reset-password"
            component={ResetPassword}
          />
          <Redirect to="/auth/login" />
        </Switch>
      </main>
    );
  }
}
