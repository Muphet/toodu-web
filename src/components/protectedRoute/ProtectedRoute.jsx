// import PropTypes from "prop-types";
import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthService from "../../services/AuthService";
import SceneLoader from "../sceneLoader/SceneLoader";
import OfflineNotice from "../offlineNotice/OfflineNotice";
import protectedRouteContainer from "./protectedRouteContainer.js";

export class ProtectedRoute extends Component {
  // static propTypes = {};

  state = {
    authenticated: false,
    authenticating: true
  };

  componentWillMount() {
    if (this.props.getAuthFromUrl) {
      AuthService.setFromUrl();
    }
    if (this.state.authenticated) {
      this.authenticated();
    } else {
      AuthService.authenticate()
        .then(this.authenticated.bind(this))
        .catch(this.notAuthenticated.bind(this));
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.authenticated && !this.props.authenticated) {
      this.setState({ authenticating: false, authenticated: false });
    }
  }

  authenticated() {
    this.setState({ authenticating: false, authenticated: true });
  }

  notAuthenticated() {
    this.setState({ authenticating: false, authenticated: false });
  }

  render() {
    if (this.state.authenticating) return <SceneLoader />;
    else if (this.state.authenticated)
      return (
        <React.Fragment>
          <Route {...this.props} />
          <OfflineNotice />
        </React.Fragment>
      );
    else return <Redirect to="/auth/login" />;
  }
}

export default protectedRouteContainer(ProtectedRoute);
