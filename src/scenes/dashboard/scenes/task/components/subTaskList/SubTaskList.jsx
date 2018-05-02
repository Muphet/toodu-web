import PropTypes from "prop-types";
import React, { Component } from "react";

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
    const taskId = this.props.taskId;
    subTaskApi.update(subTaskId, { taskId, completed });
  }

  render() {
    if (!this.props.subTasks.length)
      return (
        <div className="empty">
          <p>No sub tasks yet</p>
        </div>
      );

    return (
      <ul className="taskList">
        {this.props.subTasks.map(subTask => (
          <li className="taskList__task" key={subTask.id}>
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
            <div className="taskList__name">{subTask.name}</div>
          </li>
        ))}
      </ul>
    );
  }
}

export default subTaskListContainer(SubTaskList);
