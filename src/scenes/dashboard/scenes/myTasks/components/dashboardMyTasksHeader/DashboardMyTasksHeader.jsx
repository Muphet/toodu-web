// import PropTypes from "prop-types";
import React, { Component } from "react";

export default class DashboardMyTasksHeader extends Component {
  static propTypes = {};

  render() {
    return (
      <header className="dashboardHeader">
        <div className="dashboardHeader__container container">
          <div className="dashboardHeader__start">
            <h2 className="dashboardHeader__title">My tasks</h2>
          </div>
        </div>
      </header>
    );
  }
}
