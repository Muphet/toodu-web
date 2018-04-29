import PropTypes from "prop-types";
import React, { Component } from "react";
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
      <div className="usersList">
        <button
          className="usersList__button"
          onClick={() => this.props.openModal("NewInviteModal")}
        >
          invite
        </button>
        <ul className="usersList__users">
          {this.props.users.map(user => (
            <li className="usersList__user" key={user.id}>
              <img
                className="usersList__avatar"
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
