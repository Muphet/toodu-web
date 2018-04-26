import "./settings.scss";
import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Profile from "./scenes/profile/Profile";

export default class Settings extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="container is-fluid  settings-container ">
        <div className="columns">

          <div className="column is-3">
            <aside className="menu">
              <h3 className="menu-label">Settings</h3>
              <ul className="menu-list">
                <li>
                  <Link to="/settings/profile">Profile settings</Link>
                </li>
              </ul>
            </aside>
          </div>

          <div className="column is-9">
            <Switch>
              <Route path="/settings/profile" component={Profile} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
