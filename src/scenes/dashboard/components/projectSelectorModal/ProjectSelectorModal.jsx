import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Fuse from "fuse.js";
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

  state = {
    filteredProjects: [],
    search: ""
  };

  componentDidMount(e) {
    this.props.getProjects();
    this.props.getStars();
  }

  unstar(projectId) {
    const star = this.props.stars.find(star => star.project_id === projectId);
    this.props.destroyStar(star.id);
  }

  search(e) {
    let projects;
    const search = e.target.value;
    if (search) {
      const fuse = new Fuse(this.props.projects, { keys: ["name"] });
      projects = fuse.search(search);
    } else {
      projects = this.props.projects;
    }
    this.setState({ projects, search });
  }

  render() {
    const projects = this.state.search
      ? this.state.filteredProjects
      : this.props.projects;

    return (
      <div className="modal__content">
        <header className="modal__header">
          <h2 className="modal__title">Select a project</h2>
        </header>
        <input
          type="text"
          value={this.state.search}
          className="modal__search"
          onChange={this.search.bind(this)}
          placeholder="Search for a project..."
        />
        <main>
          <ul className="projectList">
            {!projects.length && (
              <li className="projectList__project">No projects found...</li>
            )}
            {projects.map(project => (
              <li key={project.id} className="projectList__project">
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
        </main>
      </div>
    );
  }
}

export default projectSelectorModalContainer(ProjectSelectorModal);
