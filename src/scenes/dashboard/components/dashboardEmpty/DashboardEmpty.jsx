import PropTypes from "prop-types";
import React, { Component } from "react";
import dashboardEmptyContainer from "./dashboardEmptyContainer";

export class DashboardEmpty extends Component {
  static propTypes = {
    openModal: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="dashboardEmpty">
        <h3 className="dashboardEmpty__heading">No project selected</h3>
        <button
          className="dashboardEmpty__action button button--blue"
          onClick={() => this.props.openModal("ProjectSelectorModal")}
        >
          Select Project
        </button>
        <button
          className="dashboardEmpty__action button button--green"
          onClick={() => this.props.openModal("NewProjectModal")}
        >
          Create Project
        </button>
      </div>
    );
  }
}

export default dashboardEmptyContainer(DashboardEmpty);
