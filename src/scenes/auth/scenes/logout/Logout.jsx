// import PropTypes from 'prop-types';
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../../../../services/AuthService.js";

export default class Logout extends Component {
  // static propTypes = {};
  componentWillMount() {
    AuthService.clear();
  }

  render() {
    return <Redirect to="/auth/login" />;
  }
}
