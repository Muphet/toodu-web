// import PropTypes from 'prop-types';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import headerContainer from "./headerContainer";

function BurgerIcon(props) {
  return (
    <a
      role="button"
      onClick={props.onClick}
      className={classNames({
        "navbar-burger": true,
        "is-active": props.navOpen
      })}
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  );
}

export class Header extends Component {
  // static propTypes = {};

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
    console.log("tog");
    this.setState({ navOpen: !this.state.navOpen });
  }

  render() {
    return (
      <header className="navbar is-primary">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/app">
            {this.props.team ? <h1>{this.props.team.name}</h1> : <h1>Toodu</h1>}
          </Link>
          <BurgerIcon
            onClick={this.toggleNav.bind(this)}
            navOpen={this.state.navOpen}
          />
        </div>

        <div
          className={classNames({
            "navbar-menu": true,
            "is-active": this.state.navOpen
          })}
        >
          <div className="navbar-start" />

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
