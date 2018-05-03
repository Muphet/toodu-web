// import PropTypes from 'prop-types';
import React, { Component } from "react";
import { Route } from "react-router-dom";
import Tasks from "./components/tasks/Tasks";
import Task from "../../components/task/Task";
import DashboardMyTasksHeader from "./components/dashboardMyTasksHeader/DashboardMyTasksHeader";

export default class MyTasks extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <DashboardMyTasksHeader />
        <main className="container content content--center">
          <Tasks />
          <Route path="/dashboard/tasks/:taskId" component={Task} />
        </main>
      </div>
    );
  }
}
