import PropTypes from "prop-types";
import React, { Component } from "react";
import classNames from "classnames";
import userPickerContainer from "./userPickerContainer";

export class UserPicker extends Component {
  static propTypes = {
    className: PropTypes.string,
    getUsers: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
  };

  state = {
    user: this.props.user || { id: null }
  };

  componentDidMount() {
    this.props.getUsers();
  }

  handleUserSelect(user) {
    if (user.id === this.state.user.id) {
      this.setState({ user: { id: null } });
    } else {
      this.setState({ user });
    }
  }

  confirm(e) {
    e.stopPropagation();
    this.props.onConfirm(this.state.user);
  }

  cancel(e) {
    e.stopPropagation();
    this.props.onCancel();
  }

  render() {
    return (
      <div className={"userPicker " + this.props.className}>
        <ul className="userPicker__users">
          {this.props.users.map(user => (
            <User
              key={user.id}
              active={user.id === this.state.user.id}
              user={user}
              handleUserSelect={this.handleUserSelect.bind(this)}
            />
          ))}
        </ul>
        <div className="datePicker__actions">
          <button
            className="datePicker__action button button--green"
            onClick={this.confirm.bind(this)}
          >
            Confirm
          </button>
          <button
            className="datePicker__action button button--grey"
            onClick={this.cancel.bind(this)}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

function User({ user, handleUserSelect, active }) {
  return (
    <li
      key={user.id}
      onClick={() => handleUserSelect(user)}
      className={classNames("userPicker__user", {
        "userPicker__user--active": active
      })}
    >
      <img
        src={user.gravatar_url}
        className="userPicker__avatar"
        alt={`${user.first_name}'s avatar`}
      />
      {user.first_name + " " + user.last_name}
    </li>
  );
}

export default userPickerContainer(UserPicker);
