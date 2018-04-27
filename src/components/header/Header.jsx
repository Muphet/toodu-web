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
      <header>
        <div>
          <div>
            <Link to="/app">
              {this.props.team ? (
                <h1>{this.props.team.name}</h1>
              ) : (
                <h1>Toodu</h1>
              )}
            </Link>
          </div>

          <UsersList />

          <div>
            {this.props.currentUser && (
              <div>
                <p className="navbar-link">
                  Logged in as {this.props.currentUser.first_name}
                </p>
                <Link to="/settings/profile" className="navbar-item">
                  Profile settings
                </Link>
                <Link to="/auth/logout" className="navbar-item">
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
    );
  }
}

export default headerContainer(Header);
