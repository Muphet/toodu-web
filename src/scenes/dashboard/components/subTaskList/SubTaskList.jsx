import PropTypes from "prop-types";
import React, { Component } from "react";
import subTaskApi from "../../../../core/subTasks/subTasksApi";
import SubTaskListItem from "../subTaskListItem/SubTaskListItem";

export default class SubTaskList extends Component {
  static propTypes = {
    subTasks: PropTypes.array.isRequired
  };

  updateComplete(subTaskId, completed) {
    const taskId = this.props.taskId;
    subTaskApi.update(subTaskId, { taskId, completed });
  }

  render() {
    if (!this.props.subTasks.length)
      return (
        <div className="empty empty--white">
          <p>No sub-tasks</p>
        </div>
      );

    return (
      <ul className="taskList">
        {this.props.subTasks.map(subTask => (
          <SubTaskListItem
            key={subTask.id}
            subTask={subTask}
            onComplete={this.updateComplete.bind(this)}
          />
        ))}
      </ul>
    );
  }
}
