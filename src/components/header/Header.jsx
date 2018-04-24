// import PropTypes from 'prop-types';
import "./header.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import headerContainer from "./headerContainer";

export class Header extends Component {
  // static propTypes = {};

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
        {this.props.team ? <h1>{this.props.team.name}</h1> : <h1>Toodu</h1>}
        {this.props.currentUser &&
          <div>
            <p>Welcome {this.props.currentUser.first_name}</p>
            <Link to="/auth/logout">Log out</Link>
          </div>}
      </header>
    );
  }
}

export default headerContainer(Header);
