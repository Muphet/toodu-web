import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import headerContainer from "./headerContainer";

export class Header extends Component {
  static propTypes = {
    getUsers: PropTypes.func.isRequired,
    getTeam: PropTypes.func.isRequired,
    authenticated: PropTypes.bool.isRequired,
    team: PropTypes.object,
    currentUser: PropTypes.object
  };

  componentDidMount(e) {
    if (this.props.authenticated) {
      this.fetch();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.authenticated && !prevProps.authenticated) {
      this.fetch();
    }
  }

  fetch() {
    this.props.getTeam();
    this.props.getUsers();
  }

  render() {
    return (
      <header className="header">
        <div className="header__container container">
          <div className="header__start">
            <h1 className="header__title">
              <Link to="/dashboard">
                {this.props.team
                  ? <h1>{this.props.team.name}</h1>
                  : <h1>Toodu</h1>}
              </Link>
            </h1>
          </div>

          {this.props.currentUser &&
            <div className="header__end">
              <button
                className="header__inviteButton"
                onClick={() => this.props.openModal("NewInviteModal")}
                title="Invite a new user"
              />
              <div className="has-dropdown">
                <div className="header__user">
                  <img
                    src={this.props.currentUser.gravatar_url}
                    alt="Your avatar"
                    className="header__avatar"
                  />
                </div>

                <DropdownMenu />
              </div>
            </div>}
        </div>
      </header>
    );
  }
}

function DropdownMenu() {
  return (
    <ul className="dropdown">
      <li className="dropdown__item">
        <Link to="/dashboard" className="dropdown__link dropdown__link--home">
          Dashboard
        </Link>
      </li>
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

export default headerContainer(Header);
