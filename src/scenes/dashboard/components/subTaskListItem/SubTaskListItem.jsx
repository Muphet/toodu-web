import PropTypes from "prop-types";
import React, { Component } from "react";
import classNames from "classnames";
import Checkbox from "../../../../components/checkbox/Checkbox";

export default class SubTaskListItem extends Component {
  static propTypes = {
    subTask: PropTypes.object.isRequired,
    onComplete: PropTypes.func.isRequired
  };

  handleComplete(checked) {
    this.props.onComplete(this.props.subTask.id, checked);
  }

  render() {
    return (
      <li className="taskList__task" key={this.props.subTask.id}>
        <Checkbox
          className="taskList__checkbox"
          checked={this.props.subTask.completed}
          id={`subTask_${this.props.subTask.id}`}
          onChange={this.handleComplete.bind(this)}
        />
        <div
          className={classNames("taskList__name", {
            "taskList__name--completed": this.props.subTask.completed
          })}
        >
          {this.props.subTask.name}
        </div>
      </li>
    );
  }
}
