// import PropTypes from 'prop-types';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import ForgotPasswordForm
  from "./components/forgotPasswordForm/ForgotPasswordForm";

export default class ForgotPassword extends Component {
  // static propTypes = {};

  render() {
    return (
      <div>
        <h1>Forgotten your password?</h1>
        <ForgotPasswordForm />
        <Link to="/auth/login">Go to login</Link>
        <Link to="/auth/signup">Go to signup</Link>
      </div>
    );
  }
}
