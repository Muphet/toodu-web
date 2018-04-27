import PropTypes from "prop-types";
import React, { Component } from "react";

import { Link } from "react-router-dom";
import projectSelectorContainer from "./projectSelectorContainer";

export class ProjectSelector extends Component {
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

  state = {
    open: false
  };

  constructor(props) {
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount(e) {
    this.props.getProjects();
    this.props.getStars();
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  unstar(projectId) {
    const star = this.props.stars.find(star => star.project_id === projectId);
    this.props.destroyStar(star.id);
  }

  toggle() {
    this.setState({ open: !this.state.open });
  }

  close(event) {
    if (event) event.stopPropagation();
    this.setState({ open: false });
  }

  handleClickOutside(event) {
    if (this.wrapper && !this.wrapper.contains(event.target)) {
      this.close();
    }
  }

  render() {
    if (!this.props.projects.length) return <h2>No projects found...</h2>;

    return (
      <div ref={wrapper => (this.wrapper = wrapper)}>
        <div onClick={this.toggle.bind(this)}>
          {this.props.selectedProject ? (
            <h2>{this.props.selectedProject.name}</h2>
          ) : (
            <h2>Select a project</h2>
          )}
        </div>

        <ul>
          {this.props.projects.map(project => (
            <li key={project.id}>
              <Link
                onClick={this.close.bind(this)}
                className="project-selector-link"
                to={`/app/project/${project.id}`}
              >
                {project.name}
              </Link>
              <div>
                {this.props.starredProjectIds.includes(project.id) ? (
                  <button onClick={() => this.unstar(project.id)}>
                    unstar
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      this.props.createStar({ projcet_id: project.id })
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

export default projectSelectorContainer(ProjectSelector);
