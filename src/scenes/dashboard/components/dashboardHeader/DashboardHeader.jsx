// import PropTypes from "prop-types";
import "./dashboardHeader.scss";
import React, { Component } from "react";
import ProjectSelector from "../projectSelector/ProjectSelector";
import UsersList from "../usersList/UsersList";

export default class DashboardHeader extends Component {
  // static propTypes = {};

  render() {
    return (
      <header className="dashboard-header">
        <ProjectSelector />
        <UsersList />
      </header>
    );
  }
}
