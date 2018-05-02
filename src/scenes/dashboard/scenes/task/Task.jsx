import PropTypes from "prop-types";
import React, { Component } from "react";
import UtilService from "../../../../services/UtilService";
import tasksApi from "../../../../core/tasks/tasksApi";
import taskContainer from "./taskContainer";
import DatePicker from "../../../../components/datePicker/DatePicker";
import UserPicker from "../../../../components/userPicker/UserPicker";
import SubTaskList from "./components/subTaskList/SubTaskList";
import CommentList from "./components/commentList/CommentList";
import NewComment from "./components/newComment/NewComment";
import NewSubTask from "./components/newSubTask/NewSubTask";

export class Task extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    changeTask: PropTypes.func.isRequired,
    task: PropTypes.object,
    assignedUser: PropTypes.object
  };

  state = {
    showDatePicker: false,
    showUserPicker: false
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

  hideDatePicker(e) {
    this.setState({ showDatePicker: false });
  }

  handleDatePick(dueDate) {
    this.hideDatePicker();
    tasksApi.update(this.props.task.id, { dueDate });
  }

  showUserPicker() {
    this.setState({ showUserPicker: true });
  }

  hideUserPicker(e) {
    this.setState({ showUserPicker: false });
  }

  handleUserPick(user) {
    this.hideUserPicker();
    tasksApi.update(this.props.task.id, { userId: user.id });
  }

  render() {
    console.log("user", this.props.assignedUser);
    if (!this.props.task) return <p>Task not found</p>;
    return (
      <div className="content__col content__col--half">
        <div className="task">
          <header className="task__header">
            <h2 className="task__title">{this.props.task.name}</h2>
            <div className="task__actions">
              <div
                className="task__dueDate"
                onClick={this.showDatePicker.bind(this)}
              >
                <p>
                  {this.props.task.due_date
                    ? UtilService.dueDateInWords(this.props.task.due_date)
                    : "Not set"}
                </p>
                <DatePicker
                  hidden={!this.state.showDatePicker}
                  onConfirm={this.handleDatePick.bind(this)}
                  onCancel={this.hideDatePicker.bind(this)}
                  day={new Date(this.props.task.due_date)}
                  className="task__datePicker"
                />
              </div>
              <div
                className="task__user"
                onClick={this.showUserPicker.bind(this)}
              >
                {this.props.assignedUser && (
                  <img
                    className="task__userAvatar"
                    src={this.props.assignedUser.gravatar_url}
                  />
                )}
                <UserPicker
                  hidden={!this.state.showUserPicker}
                  onConfirm={this.handleUserPick.bind(this)}
                  onCancel={this.hideUserPicker.bind(this)}
                  user={this.props.assignedUser}
                  className="task__userPicker"
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
