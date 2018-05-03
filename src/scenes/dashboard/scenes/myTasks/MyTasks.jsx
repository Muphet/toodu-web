// import PropTypes from 'prop-types';
import React, { Component } from "react";
import DashboardMyTasksHeader from "./components/dashboardMyTasksHeader/DashboardMyTasksHeader";

export default class MyTasks extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <DashboardMyTasksHeader />
        <main className="container content content--center">
          <h1>My Tasks</h1>
        </main>
      </div>
    );
  }
}
