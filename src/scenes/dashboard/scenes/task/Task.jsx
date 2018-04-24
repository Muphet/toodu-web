// import PropTypes from "prop-types";
import React, { Component } from "react";
import taskContainer from "./taskContainer";
import SubTaskList from "./components/subTaskList/SubTaskList";
import CommentList from "./components/commentList/CommentList";
import NewComment from "./components/newComment/NewComment";
import NewSubTask from "./components/newSubTask/NewSubTask";

export class Task extends Component {
  // static propTypes = {};

  componentDidMount() {
    this.props.changeTask(this.props.match.params.taskId);
  }

  componentDidUpdate(prevProps) {
    const prevParams = prevProps.match.params;
    const params = this.props.match.params;

    if (prevParams.taskId !== params.taskId) {
      this.props.changeTask(params.taskId);
    }
  }

  render() {
    if (!this.props.task) return <p>Task not found</p>;
    return (
      <div className="dashboard-main__item">
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
