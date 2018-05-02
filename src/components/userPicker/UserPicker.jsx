import PropTypes from "prop-types";
import React, { Component } from "react";
import classNames from "classnames";
import userPickerContainer from "./userPickerContainer";

export class UserPicker extends Component {
  static propTypes = {
    hidden: PropTypes.bool,
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

  componentDidUpdate(prevProps) {
    const prevUserId = prevProps.user && prevProps.user.id;
    const userId = this.props.user && this.props.user.id;
    if (prevUserId !== userId) {
      const user = this.props.user ? this.props.user : { id: null };
      this.setState({ user });
    }
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
    if (this.props.hidden) return null;

    return (
      <div className={"userPicker " + this.props.className}>
        <ul className="userPicker__users">
          {this.props.users.map(user => (
            <li
              key={user.id}
              onClick={() => this.handleUserSelect(user)}
              className={classNames("userPicker__user", {
                "userPicker__user--active": user.id === this.state.user.id
              })}
            >
              <img
                src={user.gravatar_url}
                className="userPicker__avatar"
                alt={`${user.first_name}'s avatar`}
              />
              {user.first_name + " " + user.last_name}
            </li>
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

export default userPickerContainer(UserPicker);
