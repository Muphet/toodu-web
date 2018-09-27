import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import tasksContainer from "./tasksContainer";
import TaskList from "../../../../components/taskList/TaskList";

export class Tasks extends Component {
  static propTypes = {
    currentUser: PropTypes.object.isRequired,
    getTasksForUser: PropTypes.func.isRequired,
    tasksByProject: PropTypes.object.isRequired,
    projects: PropTypes.array.isRequired
  };

  componentWillMount() {
    this.props.getTasksForUser(this.props.currentUser.id);
    this.props.getProjects();
  }

  getProjectName(projectId) {
    const project = this.props.projects.find(
      project => project.id === projectId
    );
    if (project) return project.name;
  }
  
  renderEmpty() {
    const modal = this.props.projects.length ? "ProjectSelectorModal" : "NewProjectModal";
    const text = this.props.projects.length ? "Select a project" : "Create a project";
    const color = this.props.projects.length ? "blue" : "green";

    return (
      <Route
        exact
        path="/dashboard/tasks"
        component={() => (
          <div className="dashboardEmpty">
            <h3 className="dashboardEmpty__heading">
              You have no assigned tasks!
            </h3>
            <button
              onClick={ () => this.props.openModal(modal) }
              className={`dashboardEmpty__action button button--${color}`}
            >
              {text}
            </button>
          </div>
        )}
      />
    );
  }

  render() {
    if (!Object.keys(this.props.tasksByProject).length) {
      this.renderEmpty();
    }

    return (
      <div className="tasks content__col content__col--half">
        {Object.keys(this.props.tasksByProject).map(projectId => (
          <div key={`project_${projectId}`}>
            <h3 className="tasks__heading">
              <Link to={`/dashboard/project/${projectId}`}>
                {this.getProjectName(projectId)}
              </Link>
            </h3>
            <TaskList
              tasks={this.props.tasksByProject[projectId]}
              currentTaskId={this.props.currentTaskId}
              linkPath="/dashboard/tasks/"
              filter={false}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default tasksContainer(Tasks);
