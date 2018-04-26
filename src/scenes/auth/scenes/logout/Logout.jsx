import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../../../../services/AuthService.js";

export default class Logout extends Component {
  static propTypes = {};

  componentDidMount() {
    AuthService.logout();
  }

  render() {
    return <Redirect to="/auth/login" />;
  }
}
