import React, { Component } from "react";
import qs from "qs";
import usersApi from "../../../../core/users/usersApi";
import Form from "../../../../components/form/Form";

export default class Invited extends Component {
  static propTypes = {};

  componentWillMount() {
    this.query = qs.parse(this.props.location.search.slice(1));
  }

  async signup(signupData) {
    const res = await usersApi.create({
      ...signupData,
      inviteToken: this.query.invite_token
    });
    return res;
  }

  render() {
    return (
      <div>
        <div className="authBox">
          <header className="authBox__header">
            <figure className="authBox__icon authBox__icon--user" />
            <h1 className="authBox__title">Sign up to accept your invite</h1>
          </header>
          <main className="authBox__body">
            <Form
              submitText="Signup"
              onSubmit={this.signup.bind(this)}
              fields={[
                {
                  name: "email",
                  type: "email",
                  label: "Enter your email address",
                  initialValue: this.query.email
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
      </div>
    );
  }
}
