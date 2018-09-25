// import PropTypes from "prop-types";
import React, { Component } from "react";
import dashboardMyTasksHeaderContainer from "./dashboardMyTasksHeaderContainer";

class DashboardMyTasksHeader extends Component {
  static propTypes = {};

  render() {
    return (
      <header className="dashboardHeader">
        <div className="dashboardHeader__container container">
          <div className="dashboardHeader__start">
            <h2 className="dashboardHeader__title">Your Assigned Tasks</h2>
          </div>
          <div className="dashboardHeader__end">
            <div className="dashboardHeader__actions">
              <button
                className="dashboardHeader__action dashboardHeader__action--select button button--blue"
                onClick={() => this.props.openModal("ProjectSelectorModal")}
              >
                Select Project
              </button>
              <button
                className="dashboardHeader__action dashboardHeader__action--add button button--green"
                onClick={() => this.props.openModal("NewProjectModal")}
              >
                Create Project
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default dashboardMyTasksHeaderContainer(DashboardMyTasksHeader);