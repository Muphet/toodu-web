// import PropTypes from 'prop-types';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DashboardHeader from "./components/dashboardHeader/DashboardHeader";
import ModalRoot
  from "./components/modalRoot/ModalRoot";

export default class Dashboard extends Component {
  // static propTypes = {};

  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/auth/logout">Log out</Link>
        <DashboardHeader />
        <ModalRoot />
      </div>
    );
  }
}
