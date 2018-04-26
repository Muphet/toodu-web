import PropTypes from "prop-types";
import React, { Component } from "react";
import InlineForm from "../../../../../../components/inlineForm/InlineForm";
import subTasksApi from "../../../../../../core/subTasks/subTasksApi";

export default class NewSubTask extends Component {
  static propTypes = {
    taskId: PropTypes.string.isRequired
  };

  createSubTask({name}) {
    return subTasksApi.create({ name, taskId: this.props.taskId });
  }

  render() {
    return (
      <InlineForm
        submitText="Add"
        className="new-task"
        onSubmit={this.createSubTask.bind(this)}
        fields={[{
          name: "name",
          type: "text",
          label: "Add a new sub task"
        }]}
      />
    );
  }
}
