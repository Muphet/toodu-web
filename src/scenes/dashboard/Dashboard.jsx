// import PropTypes from 'prop-types';
import React, { Component } from "react";
import { Route } from "react-router-dom";
import DashboardHeader from "./components/dashboardHeader/DashboardHeader";
import Project from "./scenes/project/Project";
import Task from "./scenes/task/Task";
import ModalRoot from "./components/modalRoot/ModalRoot";

export default class Dashboard extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <DashboardHeader />
        <main className="container is-fluid">
          <div className="columns">
            <div className="column is-6">
              <Route path="/app/project/:projectId" component={Project} />
            </div>
            <div className="column is-6">
              <Route path="/app/project/:projectId/task/:taskId" component={Task} />
            </div>
          </div>
        </main>
        <ModalRoot />
      </div>
    );
  }
}
