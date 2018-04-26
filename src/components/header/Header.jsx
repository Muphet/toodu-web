import PropTypes from 'prop-types';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import headerContainer from "./headerContainer";

export class Header extends Component {
  static propTypes = {
    getUsers: PropTypes.func.isRequired,
    getCurrentUser: PropTypes.func.isRequired,
    getTeam: PropTypes.func.isRequired,
    team: PropTypes.object,
    currentUser: PropTypes.object,
    authenticated: PropTypes.object
  };

  state = {
    navOpen: false
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

  toggleNav() {
    this.setState({ navOpen: !this.state.navOpen });
  }

  render() {
    return (
      <header className="navbar is-primary">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/app">
            {this.props.team ? <h1>{this.props.team.name}</h1> : <h1>Toodu</h1>}
          </Link>
          <a
            role="button"
            onClick={this.toggleNav.bind(this)}
            className={classNames("navbar-burger", {
              "is-active": this.state.navOpen
            })}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div
          className={classNames("navbar-menu", {
            "is-active": this.state.navOpen
          })}
        >
          <div className="navbar-end">
            {this.props.currentUser &&
              <div className="navbar-item has-dropdown is-hoverable">
                <p className="navbar-link">
                  Logged in as {this.props.currentUser.first_name}
                </p>
                <div className="navbar-dropdown">
                  <Link to="/auth/logout" className="navbar-item">
                    Logout
                  </Link>
                </div>
              </div>}
          </div>
        </div>
      </header>
    );
  }
}

export default headerContainer(Header);
