// import PropTypes from 'prop-types';
import React, { Component } from "react";
import { Route } from "react-router-dom";
import DashboardHeader from "./components/dashboardHeader/DashboardHeader";
import Project from "./scenes/project/Project";
import Task from "./scenes/task/Task";
import DashboardEmpty from "./components/dashboardEmpty/DashboardEmpty";

export default class Dashboard extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <DashboardHeader />
        <main className="container content content--center">
          <Route path="/app/project/:projectId" component={Project} />
          <Route path="/app/project/:projectId/task/:taskId" component={Task} />
          <Route exact path="/app/:project?" component={DashboardEmpty} />
        </main>
      </div>
    );
  }
}
