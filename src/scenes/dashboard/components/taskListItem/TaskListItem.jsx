import PropTypes from "prop-types";
import React, { Component } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Checkbox from "../../../../components/checkbox/Checkbox";

export default class TaskListItem extends Component {
  static propTypes = {
    task: PropTypes.object.isRequired,
    onComplete: PropTypes.func.isRequired,
    linkTo: PropTypes.string.isRequired,
    user: PropTypes.object,
    active: PropTypes.bool
  };

  handleComplete(checked) {
    this.props.onComplete(this.props.task.id, checked);
  }

  render() {
    return (
      <li
        key={this.props.task.id}
        className={classNames("taskList__task", {
          "taskList__task--active": this.props.active
        })}
      >
        <Checkbox
          className="taskList__checkbox"
          checked={this.props.task.completed}
          id={`task_${this.props.task.id}`}
          onChange={this.handleComplete.bind(this)}
        />
        <Link
          to={this.props.linkTo}
          title={this.props.task.name}
          className={classNames("taskList__link", {
            "taskList__link--completed": this.props.task.completed
          })}
        >
          {this.props.task.name}
        </Link>
        <ul className="taskList__info">
          {this.props.user && <AssignedUserBadge user={this.props.user} />}
        </ul>
      </li>
    );
  }
}

function AssignedUserBadge({ user }) {
  return (
    <li className="taskList__user">
      <img
        className="taskList__userAvatar"
        src={user.gravatar_url}
        alt={`${user.first_name}'s avatar`}
      />
    </li>
  );
}
