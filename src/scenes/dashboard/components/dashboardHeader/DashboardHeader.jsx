// import PropTypes from "prop-types";
import React, { Component } from "react";
import dashboardHeaderContainer from "./dashboardHeaderContainer";
import ProjectSelector from "../projectSelector/ProjectSelector";

export class DashboardHeader extends Component {
  // static propTypes = {};

  render() {
    return (
      <header>
        <button onClick={() => this.props.openModal("NewProjectModal")}>
          Add new project
        </button>
        <ProjectSelector />
      </header>
    );
  }
}

export default dashboardHeaderContainer(DashboardHeader);
