import PropTypes from "prop-types";
import React, { Component } from "react";
import taskContainer from "./taskContainer";
import SubTaskList from "../subTaskList/SubTaskList";
import CommentList from "../commentList/CommentList";
import NewComment from "../newComment/NewComment";
import NewSubTask from "../newSubTask/NewSubTask";
import TaskHeader from "../taskHeader/TaskHeader";

export class Task extends Component {
  static propTypes = {
    match: PropTypes.shape({
      match: PropTypes.shape({ taskId: PropTypes.string.isRequired })
    }),
    changeTask: PropTypes.func.isRequired,
    subTasks: PropTypes.array.isRequired,
    comments: PropTypes.array.isRequired,
    task: PropTypes.object,
    assignedUser: PropTypes.object
  };

  componentDidMount() {
    this.props.changeTask(this.props.match.params.taskId);
    this.props.getTask(this.props.match.params.taskId);
    this.props.getSubTasksForTask(this.props.match.params.taskId);
    this.props.getCommentsForTask(this.props.match.params.taskId);
  }

  componentWillUnmount() {
    this.props.changeTask(null);
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
      <div className="content__col content__col--half">
        <div className="task">
          <TaskHeader task={this.props.task} />
          <main className="task__body">
            <NewSubTask taskId={this.props.task.id} />
            <SubTaskList subTasks={this.props.subTasks} />
          </main>
          <footer className="task__footer">
            <CommentList comments={this.props.comments} />
            <NewComment taskId={this.props.task.id} />
          </footer>
        </div>
      </div>
    );
  }
}

export default taskContainer(Task);
