import PropTypes from "prop-types";
import React, { Component } from "react";
import classNames from "classnames";
import taskHeaderContainer from "./tasksHeaderContainer.js";
import Checkbox from "../../../../components/checkbox/Checkbox";
import tasksApi from "../../../../core/tasks/tasksApi";
import UtilService from "../../../../services/UtilService";
import DatePicker from "../../../../components/datePicker/DatePicker";
import UserPicker from "../../../../components/userPicker/UserPicker";

export class TaskHeader extends Component {
  static propTypes = {
    task: PropTypes.object.isRequired,
    assignedUser: PropTypes.object,
    follow: PropTypes.object
  };

  state = {
    showDatePicker: false,
    showUserPicker: false
  };

  componentDidMount() {
    this.props.getUsers();
    this.props.getFollows();
  }

  showDatePicker() {
    this.setState({ showDatePicker: true, showUserPicker: false });
  }

  hideDatePicker(e) {
    this.setState({ showDatePicker: false });
  }

  handleDatePick(dueDate) {
    this.hideDatePicker();
    tasksApi.update(this.props.task.id, { dueDate });
  }

  showUserPicker() {
    this.setState({ showUserPicker: true, showDatePicker: false });
  }

  hideUserPicker(e) {
    this.setState({ showUserPicker: false });
  }

  handleUserPick(user) {
    this.hideUserPicker();
    tasksApi.update(this.props.task.id, { userId: user.id });
  }

  updateComplete(completed) {
    tasksApi.update(this.props.task.id, {
      completed
    });
  }

  toggleFollow() {
    if (this.props.follow) {
      this.props.destroyFollow(this.props.follow.id);
    } else {
      this.props.createFollow({
        userId: this.props.currentUser.id,
        taskId: this.props.task.id
      });
    }
  }

  render() {
    return (
      <header className="task__header">
        <div className="task__nameWrap">
          <Checkbox
            className="task__checkbox"
            checked={this.props.task.completed}
            id={`task_header_complete_${this.props.task.id}`}
            onChange={this.updateComplete.bind(this)}
          />
          <h2 className="task__title">{this.props.task.name}</h2>
        </div>
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
            {this.state.showDatePicker && (
              <DatePicker
                onConfirm={this.handleDatePick.bind(this)}
                onCancel={this.hideDatePicker.bind(this)}
                day={new Date(this.props.task.due_date)}
                className="task__datePicker"
              />
            )}
          </div>
          <div
            className={classNames("task__follow", {
              "task__follow--active": this.props.follow
            })}
            onClick={this.toggleFollow.bind(this)}
          />
          <div className="task__user" onClick={this.showUserPicker.bind(this)}>
            {this.props.assignedUser && (
              <img
                className="task__userAvatar"
                alt={`${this.props.assignedUser.first_name}'s avatar`}
                src={this.props.assignedUser.gravatar_url}
              />
            )}
            {this.state.showUserPicker && (
              <UserPicker
                onConfirm={this.handleUserPick.bind(this)}
                onCancel={this.hideUserPicker.bind(this)}
                user={this.props.assignedUser}
                className="task__userPicker"
              />
            )}
          </div>
        </div>
      </header>
    );
  }
}

export default taskHeaderContainer(TaskHeader);
