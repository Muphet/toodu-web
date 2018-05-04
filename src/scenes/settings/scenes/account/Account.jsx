import React, { Component } from "react";
import AuthService from "../../../../services/AuthService";
import usersApi from "../../../../core/users/usersApi.js";
import authApi from "../../../../core/auth/authApi.js";
import Form from "../../../../components/form/Form";

export default class Account extends Component {
  static propTypes = {};

  updatePassword({ password, passwordConfirmation, currentPassword }) {
    return authApi.updatePassword({
      password,
      passwordConfirmation,
      currentPassword
    });
  }

  deleteUser() {
    if (window.confirm("Are you sure you want to delete your account?")) {
      usersApi.destroy("current").then(() => AuthService.logout());
    }
  }

  render() {
    return (
      <div className="settings">
        <header className="settings__header">
          <h2 className="settings__title">Account</h2>
          <button
            className="button button--red"
            onClick={this.deleteUser.bind(this)}
          >
            Delete my account
          </button>
        </header>
        <div className="settings__content">
          <div className="content content--flat">
            <div className="content__col settings__form">
              <Form
                submitText="Change password"
                onSubmit={this.updatePassword.bind(this)}
                fields={[
                  {
                    name: "currentPassword",
                    type: "password",
                    label: "Enter your current password"
                  },
                  {
                    name: "password",
                    type: "password",
                    label: "Enter your new password"
                  },
                  {
                    name: "passwordConfirmation",
                    type: "password",
                    label: "Confirm your new password"
                  }
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
