// import PropTypes from 'prop-types';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import authApi from "../../../../core/auth/authApi";
import loginContainer from "./loginContainer";
import Form from "../../../../components/form/Form";

export class Login extends Component {
  // static propTypes = {};

  async login({ email, password }) {
    const res = await authApi.login(email, password);
    this.props.loginSuccess();
    return res;
  }

  render() {
    return (
      <div>
        <h1>Log in</h1>
        <Form
          submitText="Login"
          onSubmit={this.login.bind(this)}
          fields={[
            {
              name: "email",
              type: "email",
              label: "Enter your email address"
            },
            {
              name: "password",
              type: "password",
              label: "Enter your password"
            }
          ]}
        />
        <Link to="/auth/forgot-password">Forgotten your password?</Link>
        <Link to="/auth/signup">Go to signup</Link>
      </div>
    );
  }
}

export default loginContainer(Login);
