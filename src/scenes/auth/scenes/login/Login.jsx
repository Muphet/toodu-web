import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import authApi from "../../../../core/auth/authApi";
import loginContainer from "./loginContainer";
import Form from "../../../../components/form/Form";

export class Login extends Component {
  static propTypes = {
    loginSuccess: PropTypes.func.isRequired
  };

  async login({ email, password }) {
    const res = await authApi.login(email, password);
    this.props.loginSuccess();
    return res;
  }

  render() {
    return (
      <div>
        <div className="authBox">
          <header className="authBox__header">
            <h1 className="authBox__title">Log in</h1>
          </header>
          <main className="authBox__body">
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
          </main>
        </div>
        <div className="authLinks">
          <Link className="authLinks__link" to="/auth/forgot-password">
            Forgotten your password?
          </Link>
          <Link className="authLinks__link" to="/auth/signup">
            Go to signup
          </Link>
        </div>
      </div>
    );
  }
}

export default loginContainer(Login);
