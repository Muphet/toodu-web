import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import UtilService from "../../../../../../services/UtilService";
import taskApi from "../../../../../../core/tasks/tasksApi.js";
import taskListContainer from "./taskListContainer.js";

export class TaskList extends Component {
  static propTypes = {
    getTasksForProject: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired,
    projectId: PropTypes.string.isRequired,
    currentTaskId: PropTypes.string
  };

  componentDidMount(e) {
    this.props.getTasksForProject();
    this.props.getUsers();
  }

  updateComplete(taskId, completed) {
    taskApi.update(taskId, {
      completed
    });
  }

  render() {
    if (!this.props.tasks.length)
      return (
        <div className="empty empty--white">
          <p>No tasks yet...</p>
        </div>
      );

    return (
      <ul className="taskList">
        {this.props.tasks.map(task => (
          <li
            key={task.id}
            className={classNames("taskList__task", {
              "taskList__task--active": this.props.activeTask &&
                task.id === this.props.activeTask.id
            })}
          >
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
              to={`/dashboard/project/${this.props.projectId}/task/${task.id}`}
            >
              {task.name}
            </Link>
            <ul className="taskList__info">
              {task.due_date &&
                <li className="taskList__dueDate">
                  {UtilService.dueDateInWords(task.due_date)}
                </li>}
              {task.user_id &&
                <li className="taskList__user">
                  {(() => {
                    const user = this.props.users.find(
                      user => user.id === task.user_id
                    );
                    if (!user) return null;
                    return (
                      <img
                        className="taskList__userAvatar"
                        src={user.gravatar_url}
                        alt={`${user.first_name}'s avatar`}
                      />
                    );
                  })()}
                </li>}
            </ul>
          </li>
        ))}
      </ul>
    );
  }
}

export default taskListContainer(TaskList);
