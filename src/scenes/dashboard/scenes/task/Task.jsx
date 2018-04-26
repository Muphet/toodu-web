import PropTypes from "prop-types";
import React, { Component } from "react";
import taskContainer from "./taskContainer";
import SubTaskList from "./components/subTaskList/SubTaskList";
import CommentList from "./components/commentList/CommentList";
import NewComment from "./components/newComment/NewComment";
import NewSubTask from "./components/newSubTask/NewSubTask";

export class Task extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    changeTask: PropTypes.func.isRequired,
    task: PropTypes.object.isRequired
  };

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
      <div className="card">
        <header className="card-header">
          <h2 className="card-header-title">{this.props.task.name}</h2>
        </header>
        <div className="card-content">
          <div className="content">
            <NewSubTask taskId={this.props.task.id} />
          </div>
        </div>
        <div className="card-table">
          <div className="content">
            <SubTaskList taskId={this.props.task.id} />
          </div>
        </div>
        <div className="card-content">
          <div className="content">
            <NewComment taskId={this.props.task.id} />
            <CommentList taskId={this.props.task.id} />
          </div>
        </div>
      </div>
    );
  }
}

export default taskContainer(Task);
