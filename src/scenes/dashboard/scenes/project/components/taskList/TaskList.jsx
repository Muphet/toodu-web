import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import taskApi from "../../../../../../core/tasks/tasksApi.js";
import taskListContainer from "./taskListContainer.js";

export class TaskList extends Component {
  static propTypes = {
    getTasksForProject: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired,
    projectId: PropTypes.string.isRequired,
    currentTaskId: PropTypes.string
  };

  async componentDidMount(e) {
    this.props.getTasksForProject();
  }

  updateComplete(taskId, completed) {
    taskApi.update({
      id: taskId,
      completed
    });
  }

  render() {
    if (!this.props.tasks.length)
      return (
        <div className="task-empty">
          <p>No sub tasks yet</p>
        </div>
      );

    return (
      <ul className="table is-fullwidth is-striped">
        {this.props.tasks.map(task => (
          <li key={task.id}>
            <input
              checked={task.completed}
              onChange={e => this.updateComplete(task.id, e.target.checked)}
              type="checkbox"
            />
            <Link to={`/app/project/${this.props.projectId}/task/${task.id}`}>
              {task.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default taskListContainer(TaskList);
