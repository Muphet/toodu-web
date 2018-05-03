import PropTypes from "prop-types";
import React, { Component } from "react";
import usersApi from "../../../../core/users/usersApi.js";
import profileContainer from "./profileContainer.js";
import Form from "../../../../components/form/Form";

export class Profile extends Component {
  static propTypes = {
    currentUser: PropTypes.object.isRequired
  };

  updateUser({ firstName, lastName }) {
    return usersApi.update("current", {
      firstName,
      lastName
    });
  }

  deleteUser() {
    if (window.confirm("Are you sure you want to delete your account?")) {
      usersApi
        .destroy("current")
        .then(() => this.props.navigate("/auth/login"));
    }
  }

  render() {
    return (
      <div className="settings">
        <header className="settings__header">
          <h2 className="settings__title">Profile</h2>
          <button
            className="button button--red"
            onClick={this.deleteUser.bind(this)}
          >
            Delete my account
          </button>
        </header>
        <div className="settings__content">
          <div className="content content--flat">
            <div className="content__col content__col--fill">
              <Form
                submitText="Update"
                onSubmit={this.updateUser.bind(this)}
                fields={[
                  {
                    name: "firstName",
                    type: "text",
                    label: "Enter your first name",
                    initialValue: this.props.currentUser.first_name
                  },
                  {
                    name: "lastName",
                    type: "text",
                    label: "Enter your last name",
                    initialValue: this.props.currentUser.last_name
                  }
                ]}
              />
            </div>
            <div className="content__col">
              <figure className="settings__gravatar">
                <img
                  className="settings__gravatarImg"
                  alt="Your current gravatar"
                  src={this.props.currentUser.gravatar_url}
                />
                <a
                  href="https://gravatar.com"
                  className="button button--blue"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Change
                </a>
              </figure>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default profileContainer(Profile);
