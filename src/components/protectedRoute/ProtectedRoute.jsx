// import PropTypes from "prop-types";
import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthService from "../../services/AuthService";
import SceneLoader from "../sceneLoader/SceneLoader";

export default class ProtectedRoute extends Component {
  // static propTypes = {};

  state = {
    authenticated: false,
    authenticating: true
  };

  componentWillMount() {
    if (this.props.getAuthFromUrl) {
      AuthService.setFromUrl();
    }
    if (AuthService.authenticated) {
      this.authenticated();
    } else {
      AuthService.authenticate()
        .then(this.authenticated.bind(this))
        .catch(this.notAuthenticated.bind(this));
    }
  }

  authenticated() {
    this.setState({ authenticating: false, authenticated: true });
  }

  notAuthenticated() {
    this.setState({ authenticating: false });
  }

  render() {
    if (this.state.authenticating) return <SceneLoader />;
    else if (this.state.authenticated) return <Route {...this.props} />;
    else return <Redirect to="/auth/login" />;
  }
}
