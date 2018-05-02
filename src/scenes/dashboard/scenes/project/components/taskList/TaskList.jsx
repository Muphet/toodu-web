import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
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
    taskApi.update(taskId, {
      completed
    });
  }

  render() {
    if (!this.props.tasks.length)
      return (
        <div className="empty">
          <p>No tasks yet...</p>
        </div>
      );

    return (
      <ul className="taskList">
        {this.props.tasks.map(task => (
          <li key={task.id} className="taskList__task">
            <div className="checkbox taskList__checkbox">
              <input
                className="checkbox__input"
                checked={task.completed}
                id={`task_${task.id}`}
                onChange={e => this.updateComplete(task.id, e.target.checked)}
                type="checkbox"
              />
              <label className="checkbox__label" htmlFor={`task_${task.id}`} />
            </div>
            <Link
              className={classNames("taskList__link", {
                "taskList__link--completed": task.completed
              })}
              to={`/app/project/${this.props.projectId}/task/${task.id}`}
            >
              {task.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default taskListContainer(TaskList);
