// import PropTypes from "prop-types";
import React, { Component } from "react";
import dashboardHeaderContainer from "./dashboardHeaderContainer";
import ProjectList from "./components/projectList/ProjectList";

export class DashboardHeader extends Component {
  // static propTypes = {};

  render() {
    return (
      <header>
        <button onClick={() => this.props.openModal("NewProject")}>
          Add new project
        </button>
        <ProjectList />
      </header>
    );
  }
}

export default dashboardHeaderContainer(DashboardHeader);
