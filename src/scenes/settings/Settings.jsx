import PropTypes from "prop-types";
import React, { Component } from "react";
import { Switch, Route, NavLink, Redirect } from "react-router-dom";
import settingsContainer from "./settingsContainer.js";
import Profile from "./scenes/profile/Profile";
import Account from "./scenes/account/Account";
import Admin from "./scenes/admin/Admin";

export class Settings extends Component {
  static propTypes = {
    openModal: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="container">
        <div className="content">
          <Menu openModal={this.props.openModal} />
          <div className="content__col content__col--fill">
            <Switch>
              <Redirect exact from="/settings" to="/settings/profile" />
              <Route path="/settings/profile" component={Profile} />
              <Route path="/settings/account" component={Account} />
              <Route path="/settings/admin" component={Admin} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

function Menu({ openModal }) {
  return (
    <aside className="content__col content__col--menu menu">
      <h3 className="menu__heading">Settings</h3>
      <ul className="menu__list">
        <li className="menu__item">
          <NavLink
            to="/settings/profile"
            className="menu__link"
            activeClassName="menu__link--active"
          >
            Profile
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            to="/settings/account"
            className="menu__link"
            activeClassName="menu__link--active"
          >
            Account
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            to="/settings/admin"
            className="menu__link"
            activeClassName="menu__link--active"
          >
            Admin
          </NavLink>
        </li>
      </ul>
      <h3 className="menu__heading">Other</h3>
      <ul className="menu__list">
        <li className="menu__item">
          <div
            className="menu__link"
            onClick={() => openModal("NewInviteModal")}
          >
            Invite a new user
          </div>
        </li>
        <li className="menu__item">
          <NavLink
            to="/auth/logout"
            className="menu__link"
            activeClassName="menu__link--active"
          >
            Log out
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default settingsContainer(Settings);
