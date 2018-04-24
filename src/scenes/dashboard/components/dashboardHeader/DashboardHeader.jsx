// import PropTypes from "prop-types";
import "./dashboardHeader.scss";
import React, { Component } from "react";
import dashboardHeaderContainer from "./dashboardHeaderContainer";
import ProjectSelector from "../projectSelector/ProjectSelector";
import UsersList from "../usersList/UsersList";

export class DashboardHeader extends Component {
  // static propTypes = {};

  static defaultProps = {
    users: []
  };

  render() {
    return (
      <header className="dashboard-header">
        <button onClick={() => this.props.openModal("NewProjectModal")}>
          Add new project
        </button>
        <ProjectSelector />
        <UsersList />
      </header>
    );
  }
}

export default dashboardHeaderContainer(DashboardHeader);
