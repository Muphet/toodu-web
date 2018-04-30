import PropTypes from "prop-types";
import React, { Component } from "react";
import classNames from "classnames";

import subTaskApi from "../../../../../../core/subTasks/subTasksApi.js";
import subTaskListContainer from "./subTaskListContainer.js";

export class SubTaskList extends Component {
  static propTypes = {
    getSubTasksForTask: PropTypes.func.isRequired,
    taskId: PropTypes.string.isRequired,
    subTasks: PropTypes.array.isRequired
  };

  async componentDidMount(e) {
    this.props.getSubTasksForTask(this.props.taskId);
  }

  updateComplete(subTaskId, completed) {
    subTaskApi.update(subTaskId, {
      task_id: this.props.taskId,
      completed
    });
  }

  render() {
    if (!this.props.subTasks.length)
      return (
        <div>
          <p>No sub tasks yet</p>
        </div>
      );

    return (
      <ul className="taskList taskList--subtasks">
        {this.props.subTasks.map(subTask => (
          <li
            key={subTask.id}
            className={classNames("taskList__task", {
              "taskList__task--completed": subTask.completed
            })}
          >
            <div className="checkbox taskList__checkbox">
              <input
                className="checkbox__input"
                checked={subTask.completed}
                id={`subTask_${subTask.id}`}
                onChange={e =>
                  this.updateComplete(subTask.id, e.target.checked)
                }
                type="checkbox"
              />
              <label
                className="checkbox__label"
                htmlFor={`subTask_${subTask.id}`}
              />
            </div>
            {subTask.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default subTaskListContainer(SubTaskList);
