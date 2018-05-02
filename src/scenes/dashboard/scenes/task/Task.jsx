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

  handleDatePick(dueDate) {
    this.hideDatePicker();
    tasksApi.update(this.props.task.id, { dueDate });
  }

  render() {
    if (!this.props.task) return <p>Task not found</p>;
    return (
      <div className="content__col content__col--half">
        <div className="task">
          <header className="task__header">
            <h2 className="task__title">{this.props.task.name}</h2>
            <div
              className="task__actions"
              onClick={this.showDatePicker.bind(this)}
            >
              <div className="task__dueDate">
                <p>
                  {this.props.task.due_date
                    ? this.props.task.due_date
                    : "Not set"}
                </p>
                <DatePicker
                  hidden={!this.state.showDatePicker}
                  onConfirm={this.handleDatePick.bind(this)}
                  onCancel={this.hideDatePicker.bind(this)}
                  className="task__datePicker"
                />
              </div>
            </div>
          </header>
          <main className="task__body">
            <NewSubTask taskId={this.props.task.id} />
            <SubTaskList taskId={this.props.task.id} />
          </main>
          <footer className="task__footer">
            <CommentList taskId={this.props.task.id} />
            <NewComment taskId={this.props.task.id} />
          </footer>
        </div>
      </div>
    );
  }
}

export default taskContainer(Task);
