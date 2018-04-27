import React, { Component } from "react";
import { Link } from "react-router-dom";
import authApi from "../../../../core/auth/authApi";
import Form from "../../../../components/form/Form";

export default class ResetPassword extends Component {
  static propTypes = {};

  async resetPassword({ password, passwordConfirmation }) {
    const res = await authApi.resetPassword({ password, passwordConfirmation });
    return res;
  }

  render() {
    return (
      <div>
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
        <Link to="/auth/login">Go to login</Link>
        <Link to="/auth/signup">Go to signup</Link>
      </div>
    );
  }
}
