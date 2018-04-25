// import PropTypes from "prop-types";
import "./usersList.scss";
import React, { Component } from "react";
import usersListContainer from "./usersListContainer";

export class UsersList extends Component {
  // static propTypes = {};

  static defaultProps = {
    users: []
  }

  render() {
    return (
      <div className="users-list">
        <ul className="users-list__users">
          {this.props.users.map((user) => (
            <li className="users-list__user" key={user.id}>
              <img className="users-list__avatar" src={user.gravatar_url} title={user.first_name} />
            </li>
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
