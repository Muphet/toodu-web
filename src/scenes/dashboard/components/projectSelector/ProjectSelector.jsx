// import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import projectSelectorContainer from "./projectSelectorContainer";

export class ProjectSelector extends Component {
  // static propTypes = {};

  componentDidMount(e) {
    this.props.getProjects();
  }

  render() {
    if (this.props.error) return <p>There was an error</p>;
    if (this.props.fetching) return <p>Fetching projects...</p>;
    if (!this.props.projects.length) return <p>No projects yet</p>;
    return (
      <ul>
        {this.props.projects.map(project => (
          <li key={project.id}>
            <Link to={`/app/project/${project.id}`}>{project.name}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default projectSelectorContainer(ProjectSelector);
