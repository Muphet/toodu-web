import PropTypes from 'prop-types';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import userIconUrl from "../../user.svg";
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
        <div className="has-text-centered auth-heading has-text-grey">
          <h1 className="title">Log in</h1>
          <p className="subtitile">Please log in to continue</p>
        </div>
        <div className="box auth-box">
          <figure className="avatar">
            <img src={userIconUrl} alt="" />
          </figure>
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
        </div>
        <p className="has-text-grey">
          <Link to="/auth/forgot-password">Forgotten your password?</Link>
          <Link to="/auth/signup">Go to signup</Link>
        </p>
      </div>
    );
  }
}

export default loginContainer(Login);
