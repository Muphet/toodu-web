import "react-day-picker/lib/style.css";
import PropTypes from "prop-types";
import React, { Component } from "react";
import DayPicker from "react-day-picker";
import classNames from "classnames";
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

  state = {
    pickingDate: false
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
    this.setState({ pickingDate: true });
  }

  handleDayPickerClick(day) {
    tasksApi.update(this.props.task.id, { due_date: day });
    this.setState({ pickingDate: false });
  }

  render() {
    if (!this.props.task) return <p>Task not found</p>;
    console.log(this.state);
    return (
      <div className="content__col content__col--half">
        <div className="task">
          <header className="task__header">
            <h2>{this.props.task.name}</h2>
            <p onClick={this.showDatePicker.bind(this)}>
              Due on {this.props.task.due_date}
            </p>
            <DayPicker
              className={classNames("task__datePicker", {
                "is-shown": this.state.pickingDate
              })}
              onDayClick={this.handleDayPickerClick.bind(this)}
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
