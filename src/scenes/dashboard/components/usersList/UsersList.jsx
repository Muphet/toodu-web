// import PropTypes from "prop-types";
import React, { Component } from "react";
import usersListContainer from "./usersListContainer";

export class UsersList extends Component {
  // static propTypes = {};

  static defaultProps = {
    users: []
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.users.map((user) => (
            <li key={user.id}>{user.first_name}</li>
          ))}
        </ul>
        <button onClick={() => this.props.openModal("NewInviteModal")}>
          Invite a user
        </button>
      </div>
    );
  }
}

export default usersListContainer(UsersList);
