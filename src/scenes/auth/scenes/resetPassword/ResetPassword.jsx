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
        <div className="authBox">
          <header className="authBox__header">
            <h1 className="authBox__title">Reset your password</h1>
          </header>
          <main className="authBox__body">
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
          </main>
        </div>
        <div className="authLinks">
          <Link className="authLink" to="/auth/login">Go to login</Link>
          <Link className="authLink" to="/auth/signup">Go to signup</Link>
        </div>
      </div>
    );
  }
}
