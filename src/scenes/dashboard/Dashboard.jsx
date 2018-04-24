// import PropTypes from 'prop-types';
import React, { Component } from "react";
import { Route } from "react-router-dom";
import DashboardHeader from "./components/dashboardHeader/DashboardHeader";
import Project from "./scenes/project/Project";
import Task from "./scenes/task/Task";
import ModalRoot from "./components/modalRoot/ModalRoot";

export default class Dashboard extends Component {
  // static propTypes = {};

  render() {
    return (
      <div>
        <DashboardHeader />
        <Route path="/app/project/:projectId" component={Project} />
        <Route path="/app/project/:projectId/task/:taskId" component={Task} />
        <ModalRoot />
      </div>
    );
  }
}
