// import PropTypes from "prop-types";
import "./projectSelector.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import projectSelectorContainer from "./projectSelectorContainer";

export class ProjectSelector extends Component {
  // static propTypes = {};

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

  open() {
    this.setState({ open: true });
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
    if (!this.props.projects.length) return <p>No projects yet</p>;

    return (
      <div
        onClick={this.open.bind(this)}
        className="project-selector"
        ref={wrapper => (this.wrapper = wrapper)}
      >
        {this.props.selectedProject ? (
          <h2>{this.props.selectedProject.name}</h2>
        ) : (
          <h2>Select a project</h2>
        )}
        {this.state.open && (
          <ul className="project-selector__options">
            {this.props.projects.map(project => (
              <li className="project-selector__option" key={project.id}>
                <Link
                  onClick={this.close.bind(this)}
                  className="project-selector__link"
                  to={`/app/project/${project.id}`}
                >
                  {project.name}
                </Link>
                <div className="project-selector__actions">
                  {this.props.starredProjectIds.includes(project.id) ? (
                    <button onClick={() => this.unstar(project.id)}>
                      un-star
                    </button>
                  ) : (
                    <button onClick={() => this.props.createStar(project.id)}>
                      star
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default projectSelectorContainer(ProjectSelector);
