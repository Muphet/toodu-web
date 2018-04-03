import PropTypes from "prop-types";
import React, { Component } from "react";
import projectListContainer from "./projectListContainer";

export class ProjectList extends Component {
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
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    );
  }
}

export default projectListContainer(ProjectList);
