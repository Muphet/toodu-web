import "./taskList.scss";
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
      <table className="table is-fullwidth is-striped">
        <tbody>
          {this.props.tasks.map(task => (
            <tr className="task-list-task" key={task.id}>
              <td className="task-list-checkbox">
                <input
                  checked={task.completed}
                  onChange={e => this.updateComplete(task.id, e.target.checked)}
                  type="checkbox"
                />
              </td>
              <td
                className={classNames("task-list-task", {
                  "is-active": task.id === this.props.currentTaskId,
                  "is-completed": task.completed
                })}
              >
                <Link
                  to={`/app/project/${this.props.projectId}/task/${task.id}`}
                >
                  {task.name}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default taskListContainer(TaskList);
