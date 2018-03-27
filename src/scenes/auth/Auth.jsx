// import PropTypes from 'prop-types';
import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./scenes/login/Login";
import Signup from "./scenes/signup/Signup";
import Verified from "./scenes/verified/Verified";
import Logout from "./scenes/logout/Logout";

export default class Auth extends Component {
  // static propTypes = {};

  render() {
    return (
      <div>
        <h1>Auth</h1>
        <Switch>
          <Route exact path="/auth/login" component={Login} />
          <Route exact path="/auth/signup" component={Signup} />
          <Route exact path="/auth/verified" component={Verified} />
          <Route exact path="/auth/logout" component={Logout} />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    );
  }
}
