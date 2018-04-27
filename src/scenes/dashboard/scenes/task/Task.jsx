import "react-day-picker/lib/style.css";
import PropTypes from "prop-types";
import React, { Component } from "react";
import DayPicker from "react-day-picker";
import tasksApi from "../../../../core/tasks/tasksApi";
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

  handleDayPickerClick(day) {
    tasksApi.update(this.props.task.id, { due_date: day });
  }

  render() {
    if (!this.props.task) return <p>Task not found</p>;
    console.log(this.props.task);
    return (
      <div>
        <h2>{this.props.task.name}</h2>
        <p>Due on {this.props.task.due_date}</p>
        <DayPicker onDayClick={this.handleDayPickerClick.bind(this)} />

        <NewSubTask taskId={this.props.task.id} />
        <SubTaskList taskId={this.props.task.id} />

        <CommentList taskId={this.props.task.id} />
        <NewComment taskId={this.props.task.id} />
      </div>
    );
  }
}

export default taskContainer(Task);
