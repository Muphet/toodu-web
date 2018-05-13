import PropTypes from "prop-types";
import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthService from "../../services/AuthService";
import SceneLoader from "../sceneLoader/SceneLoader";
import protectedRouteContainer from "./protectedRouteContainer.js";

export class ProtectedRoute extends Component {
  static propTypes = {
    authenticated: PropTypes.bool.isRequired,
    online: PropTypes.bool.isRequired,
    currentUser: PropTypes.object
  };

  state = {
    authenticated: false,
    authenticating: true
  };

  authenticate = this.authenticate.bind(this);

  componentWillMount() {
    if (this.props.getAuthFromUrl) {
      AuthService.setFromUrl();
    }
    this.authenticate();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.authenticated && !this.props.authenticated) {
      this.setState({ authenticating: false, authenticated: false });
    }

    if (!prevProps.online && this.props.online) {
      this.authenticate();
    }
  }

  authenticate() {
    this.setState({ authenticating: true, authenticated: false });
    if (this.props.authenticated) {
      this.authenticated();
    } else if (this.props.online) {
      AuthService.authenticate()
        .then(this.authenticated.bind(this))
        .catch(this.notAuthenticated.bind(this));
    } else if (this.props.currentUser) {
      this.authenticated();
    } else {
      this.notAuthenticated();
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
        </React.Fragment>
      );
    else return <Redirect to="/auth/logout" />;
  }
}

export default protectedRouteContainer(ProtectedRoute);
