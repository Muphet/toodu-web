// import PropTypes from 'prop-types';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../../../services/AuthService";
import Form from "../../../../components/form/Form";

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
        <Form
          submitText="Send email"
          onSubmit={this.sendResetEmail.bind(this)}
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
