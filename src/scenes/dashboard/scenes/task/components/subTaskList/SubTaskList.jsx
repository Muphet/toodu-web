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
    subTaskApi.update({
      id: subTaskId,
      taskId: this.props.taskId,
      completed
    });
  }

  render() {
    if (!this.props.subTasks.length)
      return (
        <div className="task-empty">
          <p>No sub tasks yet</p>
        </div>
      );

    return (
      <table className="table is-fullwidth is-striped">
        <tbody>
          {this.props.subTasks.map(subTask => (
            <tr className="task-list-task" key={subTask.id}>
              <td className="task-list-checkbox">
                <input
                  checked={subTask.completed}
                  onChange={e =>
                    this.updateComplete(subTask.id, e.target.checked)}
                  type="checkbox"
                />
              </td>
              <td
                className={classNames("task-list-task", {
                  "is-completed": subTask.completed
                })}
              >
                {subTask.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default subTaskListContainer(SubTaskList);
