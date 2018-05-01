import PropTypes from "prop-types";
import React, { Component } from "react";
import tasksApi from "../../../../core/tasks/tasksApi";
import taskContainer from "./taskContainer";
import DatePicker from "../../../../components/datePicker/DatePicker";
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

  state = {
    showDatePicker: false
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

  showDatePicker() {
    this.setState({ showDatePicker: true });
  }

  hideDatePicker() {
    this.setState({ showDatePicker: false });
  }

  handleDatePick(day) {
    this.hideDatePicker();
    tasksApi.update(this.props.task.id, { due_date: day });
  }

  render() {
    if (!this.props.task) return <p>Task not found</p>;
    return (
      <div className="content__col content__col--half">
        <div>
          <header>
            <h2>{this.props.task.name}</h2>
            <p onClick={this.showDatePicker.bind(this)}>
              {this.props.task.due_date
                ? `Due on ${this.props.task.due_date}`
                : "Set a due date"}
            </p>
            <DatePicker
              hidden={!this.state.showDatePicker}
              onConfirm={this.handleDatePick.bind(this)}
              onCancel={this.hideDatePicker.bind(this)}
            />
          </header>

          <NewSubTask taskId={this.props.task.id} />
          <SubTaskList taskId={this.props.task.id} />

          <CommentList taskId={this.props.task.id} />
          <NewComment taskId={this.props.task.id} />
        </div>
      </div>
    );
  }
}

export default taskContainer(Task);
