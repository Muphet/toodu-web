// import PropTypes from "prop-types";
import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthService from "../../services/AuthService";
import SceneLoader from "../sceneLoader/SceneLoader";

export default class AuthRoute extends Component {
  // static propTypes = {};

  state = {
    authenticated: false,
    authenticating: true
  };

  componentWillMount() {
    if (AuthService.authenticated) {
      this.setState({ authenticating: false, authenticated: true });
    } else {
      AuthService.authenticate()
        .then(() =>
          this.setState({ authenticating: false, authenticated: true })
        )
        .catch(() => this.setState({ authenticating: false }));
    }
  }

  render() {
    if (this.state.authenticating) return <SceneLoader />;
    else if (this.state.authenticated) return <Route {...this.props} />;
    else return <Redirect to="/auth/login" />;
  }
}
