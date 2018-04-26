// import PropTypes from 'prop-types';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import lockIconUrl from "../../lock.svg";
import authApi from "../../../../core/auth/authApi";
import Form from "../../../../components/form/Form";

export default class ResetPassword extends Component {
  // static propTypes = {};

  async resetPassword({ password, passwordConfirmation }) {
    const res = await authApi.resetPassword({ password, passwordConfirmation });
    return res;
  }

  render() {
    return (
      <div>
        <div className="has-text-centered auth-heading has-text-grey">
          <h1 className="title">Change your password</h1>
          <p className="subtitile">Enter your new password below</p>
        </div>
        <div className="box auth-box">
          <figure className="avatar">
            <img src={lockIconUrl} />
          </figure>
          <Form
            submitText="Reset"
            onSubmit={this.resetPassword.bind(this)}
            fields={[
              {
                name: "password",
                type: "password",
                label: "Choose a new password"
              },
              {
                name: "passwordConfirmation",
                type: "password",
                label: "confirm your new password"
              }
            ]}
          />
        </div>
        <Link to="/auth/login">Go to login</Link>
        <Link to="/auth/signup">Go to signup</Link>
      </div>
    );
  }
}
