import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import dashboardHomeHeaderContainer from "./dashboardHomeHeaderContainer";

export class DashboardHomeHeader extends Component {
  static propTypes = {
    selectedProject: PropTypes.object
  };

  render() {
    return (
      <header className="dashboardHeader">
        <div className="dashboardHeader__container container">
          <div className="dashboardHeader__start">
            <h2 className="dashboardHeader__title">
              {this.props.selectedProject ? (
                <Link
                  to={`/dashboard/project/${this.props.selectedProject.id}`}
                >
                  {this.props.selectedProject.name}
                </Link>
              ) : (
                "Select a project..."
              )}
            </h2>
          </div>
          <div className="dashboardHeader__end">
            <div className="dashboardHeader__actions">
              <button
                className="dashboardHeader__action button button--blue"
                onClick={() => this.props.openModal("ProjectSelectorModal")}
              >
                Select Project
              </button>
              <button
                className="dashboardHeader__action button button--green"
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

export default dashboardHomeHeaderContainer(DashboardHomeHeader);
