// import PropTypes from 'prop-types';
import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Header from "../../components/header/Header";
import DashboardHeader from "./components/dashboardHeader/DashboardHeader";
import Project from "./scenes/project/Project";
import Task from "./scenes/task/Task";
import ModalRoot from "./components/modalRoot/ModalRoot";

export default class Dashboard extends Component {
  // static propTypes = {};

  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/auth/logout">Log out</Link>
        <Header />
        <DashboardHeader />
        <ModalRoot />
        <Route path="/app/project/:projectId" component={Project} />
        <Route path="/app/project/:projectId/task/:taskId" component={Task} />
      </div>
    );
  }
}
