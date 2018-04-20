// import PropTypes from 'prop-types';
import React, { Component } from "react";
import headerContainer from "./headerContainer";

export class Header extends Component {
  // static propTypes = {};

  static defaultProps = {
    team: {},
    currentUser: {}
  }

  componentDidMount(e) {
    this.props.getUsers();
    this.props.getCurrentUser();
    this.props.getTeam();
  }

  render() {
    return (
      <header>
        <h1>Toodu</h1>
        <h4>{this.props.team.name}</h4>
        <p>Welcome {this.props.currentUser.first_name}</p>
      </header>
    );
  }
}

export default headerContainer(Header);
