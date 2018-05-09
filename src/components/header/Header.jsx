import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import HeaderMenu from "../headerMenu/HeaderMenu";
import Notifications from "../notifications/Notifications";
import headerContainer from "./headerContainer";

export class Header extends Component {
  static propTypes = {
    getUsers: PropTypes.func.isRequired,
    getTeam: PropTypes.func.isRequired,
    getNotifications: PropTypes.func.isRequired,
    notificationCount: PropTypes.number.isRequired,
    authenticated: PropTypes.bool.isRequired,
    team: PropTypes.object,
    currentUser: PropTypes.object
  };

  state = {
    showNotifications: false,
    showMenu: false
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
    this.props.getNotifications();
  }

  showNotifications() {
    this.setState({ showNotifications: true });
  }

  showMenu() {
    this.setState({ showMenu: true });
  }

  hideNotifications() {
    this.setState({ showNotifications: false });
  }

  hideMenu() {
    this.setState({ showMenu: false });
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
              <div className="has-dropdown">
                <div
                  className="header__notifications"
                  onClick={this.showNotifications.bind(this)}
                >
                  <p className="header__notificationCount">
                    {this.props.notificationCount}
                  </p>
                </div>
                {this.state.showNotifications &&
                  <Notifications
                    onClickOutside={this.hideNotifications.bind(this)}
                  />}
              </div>
              <button
                className="header__inviteButton"
                onClick={() => this.props.openModal("NewInviteModal")}
                title="Invite a new user"
              />
              <div className="has-dropdown" onClick={this.showMenu.bind(this)}>
                <div className="header__user">
                  <img
                    src={this.props.currentUser.gravatar_url}
                    alt="Your avatar"
                    className="header__avatar"
                  />
                </div>

                {this.state.showMenu &&
                  <HeaderMenu onClickOutside={this.hideMenu.bind(this)} />}
              </div>
            </div>}
        </div>
      </header>
    );
  }
}

export default headerContainer(Header);
