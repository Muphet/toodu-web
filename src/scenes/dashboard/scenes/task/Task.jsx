// import PropTypes from "prop-types";
import React, { Component } from "react";
import taskContainer from "./taskContainer";
import SubTaskList from "./components/subTaskList/SubTaskList";

export class Task extends Component {
  // static propTypes = {};

  render() {
    if (!this.props.task) return <p>Task not found</p>;
    return (
      <div>
        <h2>{this.props.task.name}</h2>
        <SubTaskList taskId={this.props.task.id} />
      </div>
    );
  }
}

export default taskContainer(Task);
