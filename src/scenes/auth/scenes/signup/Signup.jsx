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
        <Link to="/auth/login">Go to login</Link>
        <Link to="/auth/forgot-password">Forgotten your password?</Link>
      </div>
    );
  }
}
