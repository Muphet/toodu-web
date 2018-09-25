import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import headerMenuContainer from "./headerMenuContainer";

export class HeaderMenu extends Component {
  static propTypes = {
    onClickOutside: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
    locationKey: PropTypes.string.isRequired
  };

  handleOutsideClick = this.handleOutsideClick.bind(this);
  inviteNewUser = this.inviteNewUser.bind(this);

  componentDidMount() {
    document.addEventListener("click", this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleOutsideClick, false);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.locationKey !== this.props.locationKey) {
      this.props.onClickOutside();
    }
  }

  inviteNewUser() {
    this.props.onClickOutside();
    this.props.openModal("NewInviteModal");
  }

  handleOutsideClick(e) {
    if (!this.node.contains(e.target)) {
      this.props.onClickOutside();
    }
  }

  render() {
    return (
      <ul
        className="dropdown dropdown--headerMenu"
        ref={node => {
          this.node = node;
        }}
      >
        <li className="dropdown__item dropdown__item--divider">
          <Link
            to="/dashboard/tasks"
            className="dropdown__link dropdown__link--check"
          >
            My Tasks
          </Link>
        </li>
        <li className="dropdown__item">
          <Link
            to="/settings"
            className="dropdown__link dropdown__link--settings"
          >
            Settings
          </Link>
        </li>
        <li className="dropdown__item">
          <div
            onClick={ this.inviteNewUser }
            className="dropdown__link dropdown__link--user"
          >
            Invite new user
          </div>
        </li>
        <li className="dropdown__item">
          <Link
            to="/auth/logout"
            className="dropdown__link dropdown__link--logout"
          >
            Logout
          </Link>
        </li>
      </ul>
    );
  }
}

export default headerMenuContainer(HeaderMenu);
