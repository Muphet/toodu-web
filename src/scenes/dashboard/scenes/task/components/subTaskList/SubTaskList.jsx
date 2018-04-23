// import PropTypes from "prop-types";
import React, { Component } from "react";
import subTaskListContainer from "./subTaskListContainer.js";

export class SubTaskList extends Component {
  static propTypes = {};

  async componentDidMount(e) {
    this.props.getSubTasksForTask(this.props.taskId);
  }

  render() {
    if (!this.props.subTasks.length) return <p>No sub tasks yet</p>;
    
    return (
      <ul>
        {this.props.subTasks.map(subTask => (
          <li key={subTask.id}>
            {subTask.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default subTaskListContainer(SubTaskList);
