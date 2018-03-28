// import PropTypes from 'prop-types';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../../../services/AuthService.js";

export default class Verified extends Component {
  // static propTypes = {};

  componentDidMount() {
    AuthService.setFromUrl();
  }

  render() {
    return (
      <div>
        <h1>Your e-mail has been verified</h1>
        <Link to="/">Get started</Link>
      </div>
    );
  }
}
