// import PropTypes from 'prop-types';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProjectList from "./components/projectList/ProjectList";

export default class Home extends Component {
  // static propTypes = {};

  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/auth/logout">Log out</Link>
        <ProjectList />
      </div>
    );
  }
}
