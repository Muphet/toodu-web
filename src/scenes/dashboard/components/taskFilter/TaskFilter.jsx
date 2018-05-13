import PropTypes from "prop-types";
import React, { Component } from "react";
import classNames from "classnames";

export default class TaskFilter extends Component {
  static propTypes = {
    onFilter: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired
  };

  state = {
    status: "active"
  };

  componentDidUpdate(prevProps) {
    if (prevProps.tasks !== this.props.tasks) {
      this.handleFilter(this.state.status);
    }
  }

  handleFilter(status) {
    this.setState({ status });
    switch (status) {
      case "all":
        return this.props.onFilter(this.props.tasks);
      case "active":
        return this.props.onFilter(
          this.props.tasks.filter(task => !task.completed)
        );
      case "completed":
        return this.props.onFilter(
          this.props.tasks.filter(task => task.completed)
        );
      default:
        return this.props.onFilter(this.props.tasks);
    }
  }

  render() {
    return (
      <ul className="taskFilter">
        <li
          className={classNames("taskFilter__option", {
            "taskFilter__option--active": this.state.status === "active"
          })}
          onClick={() => this.handleFilter("active")}
        >
          <a>Active</a>
        </li>
        <li
          className={classNames("taskFilter__option", {
            "taskFilter__option--active": this.state.status === "completed"
          })}
          onClick={() => this.handleFilter("completed")}
        >
          <a>Completed</a>
        </li>
        <li
          className={classNames("taskFilter__option", {
            "taskFilter__option--active": this.state.status === "all"
          })}
          onClick={() => this.handleFilter("all")}
        >
          <a>All</a>
        </li>
      </ul>
    );
  }
}
