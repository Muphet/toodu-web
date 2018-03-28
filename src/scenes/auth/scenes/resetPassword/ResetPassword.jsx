// import PropTypes from 'prop-types';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import ResetPasswordForm
  from "./components/resetPasswordForm/ResetPasswordForm";

export default class ResetPassword extends Component {
  // static propTypes = {};

  render() {
    return (
      <div>
        <h1>Change your password</h1>
        <ResetPasswordForm />
        <Link to="/auth/login">Go to login</Link>
        <Link to="/auth/signup">Go to signup</Link>
      </div>
    );
  }
}
