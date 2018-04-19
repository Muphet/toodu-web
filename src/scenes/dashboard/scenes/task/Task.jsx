// import PropTypes from "prop-types";
import React, { Component } from "react";
import taskContainer from "./taskContainer";
import SubTaskList from "./components/subTaskList/SubTaskList";
import CommentList from "./components/commentList/CommentList";
import NewComment from "./components/newComment/NewComment";
import NewSubTask from "./components/newSubTask/NewSubTask";

export class Task extends Component {
  // static propTypes = {};

  render() {
    if (!this.props.task) return <p>Task not found</p>;
    return (
      <div>
        <h2>{this.props.task.name}</h2>
        <NewSubTask taskId={this.props.task.id} />
        <SubTaskList taskId={this.props.task.id} />
        <NewComment taskId={this.props.task.id} />
        <CommentList taskId={this.props.task.id} />
      </div>
    );
  }
}

export default taskContainer(Task);
