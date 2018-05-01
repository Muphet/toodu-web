import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import UsersList from "../usersList/UsersList";
import headerContainer from "./headerContainer";

export class Header extends Component {
  static propTypes = {
    getUsers: PropTypes.func.isRequired,
    getCurrentUser: PropTypes.func.isRequired,
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
    this.props.getUsers();
    this.props.getCurrentUser();
    this.props.getTeam();
  }

  render() {
    return (
      <header className="header">
        <div className="header__container container">
          <div className="header__start">
            <h1 className="header__title">
              <Link to="/app">
                {this.props.team ? (
                  <h1>{this.props.team.name}</h1>
                ) : (
                  <h1>Toodu</h1>
                )}
              </Link>
            </h1>
          </div>

          {this.props.currentUser && (
            <div className="header__end">
              <UsersList />
              <div className="has-dropdown">
                <div className="header__user">
                  <img
                    src={this.props.currentUser.gravatar_url}
                    alt="Your avatar"
                    className="header__avatar"
                  />
                </div>
                <ul className="dropdown">
                  <li className="dropdown__item">
                    <Link to="/settings/profile" className="navbar-item">
                      Profile settings
                    </Link>
                  </li>
                  <li className="dropdown__item">
                    <Link to="/auth/logout" className="navbar-item">
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </header>
    );
  }
}

export default headerContainer(Header);
