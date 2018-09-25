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

  render() {
    return (
      <div className="settings">
        <header className="settings__header">
          <h2 className="settings__title">Profile</h2>
        </header>
        <div className="settings__content">
          <div className="content content--flat">
            <div className="content__col settings__form">
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
          </div>
        </div>
      </div>
    );
  }
}

export default profileContainer(Profile);
