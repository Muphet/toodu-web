import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
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

  render() {
    return (
      <div className="content__col content__col--half">
        {Object.keys(this.props.tasksByProject).map(projectId => (
          <div className="tasks">
            <h3 className="tasks__heading">
              <Link to={`/dashboard/project/${projectId}`}>
                {this.getProjectName(projectId)}
              </Link>
            </h3>
            <TaskList
              tasks={this.props.tasksByProject[projectId]}
              currentTaskId={this.props.currentTaskId}
              linkPath="/dashboard/tasks/"
            />
          </div>
        ))}
      </div>
    );
  }
}

export default tasksContainer(Tasks);