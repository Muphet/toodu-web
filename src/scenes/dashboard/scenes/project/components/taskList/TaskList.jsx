// import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import taskListContainer from "./taskListContainer.js";

export class TaskList extends Component {
  static propTypes = {};

  async componentDidMount(e) {
    this.setState({ fetching: true });
    this.props.getTasksForProject();
  }

  render() {
    if (this.props.error) return <p>There was an error</p>;
    if (this.props.fetching) return <p>Fetching tasks...</p>;
    if (!this.props.tasks.length) return <p>No tasks yet</p>;
    return (
      <ul>
        {this.props.tasks.map(task => (
          <li key={task.id}>
            <Link to={`/app/project/${this.props.projectId}/task/${task.id}`}>
              {task.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default taskListContainer(TaskList);
