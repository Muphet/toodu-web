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
    closeModal: PropTypes.func.isRequired,
    stars: PropTypes.array.isRequired,
    projects: PropTypes.array.isRequired,
    starredProjectIds: PropTypes.array.isRequired
  };

  state = {
    projects: [],
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
      ? this.state.projects
      : this.props.projects;

    return (
      <div>
        <header className="modal__header">
          <h2 className="modal__title">Select a project</h2>
        </header>
        <input
          type="text"
          value={this.state.search}
          className="modal__search input"
          onChange={this.search.bind(this)}
          placeholder="Search for a project..."
        />
        <main>
          <ul className="projectSelector">
            {!projects.length && (
              <li className="empty empty--modal">
                <p>No projects found</p>
              </li>
            )}
            {projects.map(project => (
              <Project
                key={project.id}
                project={project}
                closeModal={this.props.closeModal}
                starredProjectIds={this.props.starredProjectIds}
                unstar={this.props.unstar}
                createStar={this.props.createStar}
              />
            ))}
          </ul>
        </main>
      </div>
    );
  }
}

function Project(props) {
  return (
    <li key={props.project.id} className="projectSelector__project">
      <Link
        className="projectSelector__link"
        onClick={props.closeModal}
        to={`/dashboard/project/${props.project.id}`}
      >
        {props.project.name}
      </Link>
      <div className="projectSelector__actions">
        {props.starredProjectIds.includes(props.project.id) ? (
          <button
            title="Unstar this project"
            className="projectSelector__action projectSelector__action--unstar"
            onClick={() => props.unstar(props.project.id)}
          />
        ) : (
          <button
            title="Star this project"
            className="projectSelector__action projectSelector__action--star"
            onClick={() => props.createStar({ project_id: props.project.id })}
          />
        )}
      </div>
    </li>
  );
}

export default projectSelectorModalContainer(ProjectSelectorModal);
