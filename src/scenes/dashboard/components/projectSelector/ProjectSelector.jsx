import PropTypes from "prop-types";
import "./projectSelector.scss";
import React, { Component } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import starLightIconUrl from "./starLight.svg";
import starDarkIconUrl from "./starDark.svg";
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
    if (!this.props.projects.length)
      return <h2 className="project-selector-select">No projects found...</h2>;

    return (
      <div className="project-selector" ref={wrapper => this.wrapper = wrapper}>
        <div
          className="project-selector-select"
          onClick={this.toggle.bind(this)}
        >
          {this.props.selectedProject
            ? <h2>{this.props.selectedProject.name}</h2>
            : <h2>Select a project</h2>}
        </div>

        <ul
          className={classNames({
            "project-selector-options": true,
            "is-active": this.state.open
          })}
        >
          {this.props.projects.map(project => (
            <li className="project-selector-option" key={project.id}>
              <Link
                onClick={this.close.bind(this)}
                className="project-selector-link"
                to={`/app/project/${project.id}`}
              >
                {project.name}
              </Link>
              <div className="project-selector-actions">
                {this.props.starredProjectIds.includes(project.id)
                  ? <button
                      className="button is-warning is-small"
                      onClick={() => this.unstar(project.id)}
                    >
                      <span className="icon">
                        <img src={starLightIconUrl} alt="invite a new user" />
                      </span>
                    </button>
                  : <button
                      className="button is-light is-small"
                      onClick={() => this.props.createStar(project.id)}
                    >
                      <span className="icon">
                        <img src={starDarkIconUrl} alt="invite a new user" />
                      </span>
                    </button>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default projectSelectorContainer(ProjectSelector);
