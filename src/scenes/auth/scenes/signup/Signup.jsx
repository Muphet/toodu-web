import React, { Component } from "react";
import { Link } from "react-router-dom";
import authApi from "../../../../core/auth/authApi";
import Form from "../../../../components/form/Form";

export default class Signup extends Component {
  static propTypes = {};

  async signup(signupData) {
    const res = await authApi.signup(signupData);
    return res;
  }

  render() {
    return (
      <div>
        <div className="authBox">
          <header className="authBox__header">
            <h1 className="authBox__title">Sign up</h1>
          </header>
          <main className="authBox__body">
            <Form
              submitText="Signup"
              onSubmit={this.signup.bind(this)}
              fields={[
                {
                  name: "email",
                  type: "email",
                  label: "Enter your email address"
                },
                {
                  name: "firstName",
                  type: "text",
                  label: "Enter your first name"
                },
                {
                  name: "lastName",
                  type: "text",
                  label: "Enter your last name"
                },
                {
                  name: "teamName",
                  type: "text",
                  label: "Team/company name"
                },
                {
                  name: "password",
                  type: "password",
                  label: "Choose a password"
                },
                {
                  name: "passwordConfirmation",
                  type: "password",
                  label: "confirm your password"
                }
              ]}
            />
          </main>
        </div>
        <div className="authLinks">
          <Link className="authLinks__link" to="/auth/login">Go to login</Link>
          <Link className="authLinks__link" to="/auth/forgot-password">
            Forgotten your password?
          </Link>
        </div>
      </div>
    );
  }
}
