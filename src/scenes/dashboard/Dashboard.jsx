// import PropTypes from 'prop-types';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DashboardHeader from "./components/dashboardHeader/DashboardHeader";
import DashboardModalRoot
  from "./components/dashboardModalRoot/DashboardModalRoot";

export default class Home extends Component {
  // static propTypes = {};

  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/auth/logout">Log out</Link>
        <DashboardHeader />
        <DashboardModalRoot />
      </div>
    );
  }
}
