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

  renderCreateProjectButton() {
    return (
      <button
        onClick={ () => this.props.openModal("NewProjectModal") }
        className="dashboardEmpty__action button button--green"
      >
        Create a project
      </button>
    )
  }

  renderSelectProjectButton() {
    return (
      <button
        onClick={ () => this.props.openModal("ProjectSelectorModal") }
        className="dashboardEmpty__action button button--blue"
      >
        Select a project
      </button>
    )
  }

  render() {
    if (!Object.keys(this.props.tasksByProject).length) {
      return (
        <Route
          exact
          path="/dashboard/tasks"
          component={() => (
            <div className="dashboardEmpty">
              <h3 className="dashboardEmpty__heading">
                You have no assigned tasks!
              </h3>
              {this.props.projects.length
                ? this.renderSelectProjectButton()
                : this.renderCreateProjectButton()
              }
            </div>
          )}
        />
      )
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
