// import PropTypes from "prop-types";
import "./usersList.scss";
import React, { Component } from "react";
import plusIconUrl from "./plus.svg";
import usersListContainer from "./usersListContainer";

export class UsersList extends Component {
  // static propTypes = {};

  static defaultProps = {
    users: []
  };

  render() {
    return (
      <div className="users-list">
        <button
          className="button is-success users-list-add"
          onClick={() => this.props.openModal("NewInviteModal")}
        >
          <span className="icon">
            <img src={plusIconUrl} alt="invite a new user" />
          </span>
        </button>
        <ul className="users-list-users">
          {this.props.users.map(user => (
            <li className="users-list-user" key={user.id}>
              <img
                className="users-list-avatar"
                src={user.gravatar_url}
                title={user.first_name}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default usersListContainer(UsersList);
