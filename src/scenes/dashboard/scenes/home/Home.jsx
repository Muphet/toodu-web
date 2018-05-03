// import PropTypes from 'prop-types';
import React, { Component } from "react";
import { Route } from "react-router-dom";
import DashboardEmpty from "../../components/dashboardEmpty/DashboardEmpty";
import DashboardHomeHeader from "./components/dashboardHomeHeader/DashboardHomeHeader";
import Project from "./components/project/Project";
import Task from "../../components/task/Task";

export default class Dashboard extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <DashboardHomeHeader />
        <main className="container content content--center">
          <Route path="/dashboard/project/:projectId" component={Project} />
          <Route
            path="/dashboard/project/:projectId/task/:taskId"
            component={Task}
          />
          <Route exact path="/dashboard/project" component={DashboardEmpty} />
        </main>
      </div>
    );
  }
}
