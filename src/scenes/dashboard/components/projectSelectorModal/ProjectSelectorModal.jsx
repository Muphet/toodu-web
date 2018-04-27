import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import projectSelectorModalContainer from "./projectSelectorModalContainer";

export class ProjectSelectorModal extends Component {
  static propTypes = {
    getProjects: PropTypes.func.isRequired,
    getStars: PropTypes.func.isRequired,
    destroyStar: PropTypes.func.isRequired,
    createStar: PropTypes.func.isRequired,
    stars: PropTypes.array.isRequired,
    projects: PropTypes.array.isRequired,
    starredProjectIds: PropTypes.array.isRequired,
    selectedProject: PropTypes.object
  };

  componentDidMount(e) {
    this.props.getProjects();
    this.props.getStars();
  }

  unstar(projectId) {
    const star = this.props.stars.find(star => star.project_id === projectId);
    this.props.destroyStar(star.id);
  }

  render() {
    if (!this.props.projects.length) return <h2>No projects found...</h2>;

    return (
      <div ref={wrapper => (this.wrapper = wrapper)}>
        <h2>Select a project</h2>

        <ul>
          {this.props.projects.map(project => (
            <li key={project.id}>
              <Link to={`/app/project/${project.id}`}>{project.name}</Link>
              <div>
                {this.props.starredProjectIds.includes(project.id) ? (
                  <button onClick={() => this.unstar(project.id)}>
                    unstar
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      this.props.createStar({ project_id: project.id })
                    }
                  >
                    star
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default projectSelectorModalContainer(ProjectSelectorModal);
