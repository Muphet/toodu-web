// import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import projectSelectorContainer from "./projectSelectorContainer";

export class ProjectSelector extends Component {
  // static propTypes = {};

  componentDidMount(e) {
    this.props.getProjects();
    this.props.getStars();
  }

  unstar(projectId) {
    const star = this.props.stars.find(star => star.project_id === projectId);
    this.props.destroyStar(star.id);
  }

  render() {
    if (this.props.error) return <p>There was an error</p>;
    if (this.props.fetching) return <p>Fetching projects...</p>;
    if (!this.props.projects.length) return <p>No projects yet</p>;
    
    const starredIds = this.props.stars.map((star) => star.project_id);

    return (
      <ul>
        {this.props.projects.map(project => (
          <li key={project.id}>
            <Link to={`/app/project/${project.id}`}>{project.name}</Link>
            {starredIds.includes(project.id)
              ? <button onClick={() => this.unstar(project.id)}>
                  un-star
                </button>
              : <button onClick={() => this.props.createStar(project.id)}>
                  star
                </button>
            }
          </li>
        ))}
      </ul>
    );
  }
}

export default projectSelectorContainer(ProjectSelector);
