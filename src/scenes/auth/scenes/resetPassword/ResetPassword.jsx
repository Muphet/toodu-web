// import PropTypes from 'prop-types';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../../../services/AuthService";
import AuthForm from "../../components/authForm/AuthForm";

export default class ResetPassword extends Component {
  // static propTypes = {};

  async resetPassword({ password, passwordConfirmation }) {
    const res = await AuthService.resetPassword({ password, passwordConfirmation });
    return res;
  }

  render() {
    return (
      <div>
        <h1>Change your password</h1>
        <AuthForm
          buttonText="Reset"
          handleSubmit={this.resetPassword.bind(this)}
          fields={[{
            name: "password",
            type: "password",
            label: "Choose a new password"
          },{
            name: "passwordConfirmation",
            type: "password",
            label: "confirm your new password"
          }]}
        />
        <Link to="/auth/login">Go to login</Link>
        <Link to="/auth/signup">Go to signup</Link>
      </div>
    );
  }
}
