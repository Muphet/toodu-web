import React, { Component } from "react";
import { Link } from "react-router-dom";
import authApi from "../../../../core/auth/authApi";
import Form from "../../../../components/form/Form";

export default class ForgotPassword extends Component {
  static propTypes = {};

  async sendResetEmail({ email }) {
    const res = await authApi.sendResetEmail(email);
    return res;
  }

  render() {
    return (
      <div>
        <div className="authBox">
          <header className="authBox__header">
            <figure className="authBox__icon authBox__icon--user" />
            <h1 className="authBox__title">Forgotten your password?</h1>
          </header>
          <main className="authBox__body">
            <Form
              submitText="Send email"
              onSubmit={this.sendResetEmail.bind(this)}
              fields={[
                {
                  name: "email",
                  type: "email",
                  label: "Enter your email address"
                }
              ]}
            />
          </main>
        </div>
        <div className="authLinks">
          <Link className="authLinks__link" to="/auth/login">Go to login</Link>
          <Link className="authLinks__link" to="/auth/signup">
            Go to signup
          </Link>
        </div>
      </div>
    );
  }
}
