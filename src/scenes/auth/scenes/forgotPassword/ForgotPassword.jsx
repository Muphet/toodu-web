// import PropTypes from 'prop-types';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../../../services/AuthService";
import AuthForm from "../../components/authForm/AuthForm";

export default class ForgotPassword extends Component {
  // static propTypes = {};

  async sendResetEmail({ email }) {
    const res = await AuthService.sendResetEmail(email);
    return res;
  }

  render() {
    return (
      <div>
        <h1>Forgotten your password?</h1>
        <AuthForm
          buttonText="Send email"
          handleSubmit={this.sendResetEmail.bind(this)}
          fields={[{
            name: "email",
            type: "email",
            label: "Enter your email address"
          }]}
        />
        <Link to="/auth/login">Go to login</Link>
        <Link to="/auth/signup">Go to signup</Link>
      </div>
    );
  }
}
