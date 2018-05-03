import PropTypes from "prop-types";
import React, { Component } from "react";
import taskApi from "../../../../core/tasks/tasksApi.js";
import taskListContainer from "./taskListContainer.js";
import TaskListItem from "../taskListItem/TaskListItem";

export class TaskList extends Component {
  static propTypes = {
    tasks: PropTypes.array.isRequired,
    projectId: PropTypes.string.isRequired,
    getUsers: PropTypes.func.isRequired,
    tasksWithUsers: PropTypes.array.isRequired,
    currentTaskId: PropTypes.string
  };

  componentDidMount(e) {
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
        {this.props.tasksWithUsers.map(task => (
          <TaskListItem
            key={task.id}
            task={task}
            onComplete={this.updateComplete.bind(this)}
            user={task.user}
            projectId={this.props.projectId}
            active={
              this.props.activeTask && task.id === this.props.activeTask.id
            }
          />
        ))}
      </ul>
    );
  }
}

export default taskListContainer(TaskList);
