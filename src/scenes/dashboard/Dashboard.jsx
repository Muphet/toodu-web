// import PropTypes from 'prop-types';
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./scenes/home/Home";
import MyTasks from "./scenes/myTasks/MyTasks";

export default class Dashboard extends Component {
  static propTypes = {};

  render() {
    return (
      <Switch>
        <Redirect exact from="/dashboard" to="/dashboard/tasks" />
        <Route path="/dashboard/project" component={Home} />
        <Route path="/dashboard/tasks" component={MyTasks} />
      </Switch>
    );
  }
}
