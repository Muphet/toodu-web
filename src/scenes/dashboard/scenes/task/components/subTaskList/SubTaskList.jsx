import PropTypes from "prop-types";
import React, { Component } from "react";
import subTaskListContainer from "./subTaskListContainer.js";

export class SubTaskList extends Component {
  static propTypes = {
    getSubTasksForTask: PropTypes.func.isRequired,
    taskId: PropTypes.string.isRequired,
    subTasks: PropTypes.array.isRequired
  };

  async componentDidMount(e) {
    this.props.getSubTasksForTask(this.props.taskId);
  }

  render() {
    if (!this.props.subTasks.length) return (
      <div className="task-empty">
        <p>No sub tasks yet</p>
      </div>
    );
    
    return (
      <table className="table is-fullwidth is-striped">
        <tbody>
          {this.props.subTasks.map(subTask => (
            <tr key={subTask.id}>
              <td>
                {subTask.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default subTaskListContainer(SubTaskList);
