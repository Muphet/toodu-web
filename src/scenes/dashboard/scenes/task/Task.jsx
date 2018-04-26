import "./task.scss";
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
    task: PropTypes.object
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
      <div className="task">
        <div className="card">
          <header className="card-header">
            <h2 className="card-header-title">{this.props.task.name}</h2>
          </header>
          <NewSubTask taskId={this.props.task.id} />
          <div className="card-table">
            <div className="content">
              <SubTaskList taskId={this.props.task.id} />
            </div>
          </div>
        </div>
        
        <CommentList taskId={this.props.task.id} />
        <NewComment taskId={this.props.task.id} />
      </div>
    );
  }
}

export default taskContainer(Task);
