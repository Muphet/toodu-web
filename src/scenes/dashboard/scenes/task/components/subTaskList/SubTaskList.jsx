// import PropTypes from "prop-types";
import React, { Component } from "react";
import subTaskListContainer from "./subTaskListContainer.js";

export class SubTaskList extends Component {
  static propTypes = {};

  async componentDidMount(e) {
    this.props.getSubTasksForTask(this.props.taskId);
  }

  render() {
    if (!this.props.subTasks.length) return <p>No sub tasks yet</p>;
    
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
