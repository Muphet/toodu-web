import "./usersList.scss";
import PropTypes from "prop-types";
import React, { Component } from "react";
import plusIconUrl from "./plus.svg";
import usersListContainer from "./usersListContainer";

export class UsersList extends Component {
  static propTypes = {
    openModal: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
  };

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
                alt="avatar"
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
