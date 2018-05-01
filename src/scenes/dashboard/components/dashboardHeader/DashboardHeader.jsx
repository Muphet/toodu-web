import PropTypes from "prop-types";
import React, { Component } from "react";
import dashboardHeaderContainer from "./dashboardHeaderContainer";

export class DashboardHeader extends Component {
  static propTypes = {
    selectedProject: PropTypes.object
  };

  render() {
    return (
      <header className="dashboardHeader">
        <div className="dashboardHeader__container container">
          <div className="dashboardHeader__start">
            <h2>
              {this.props.selectedProject
                ? this.props.selectedProject.name
                : "Select a project..."}
            </h2>
          </div>
          <div className="dashboardHeader__end">
            <button
              onClick={() => this.props.openModal("ProjectSelectorModal")}
            >
              Select Project
            </button>
            <button onClick={() => this.props.openModal("NewProjectModal")}>
              Create Project
            </button>
          </div>
        </div>
      </header>
    );
  }
}

export default dashboardHeaderContainer(DashboardHeader);
