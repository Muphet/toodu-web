// import PropTypes from "prop-types";
import React, { Component } from "react";
import Form from "../../../../../../components/form/Form";
import subTasksApi from "../../../../../../core/subTasks/subTasksApi";

export default class NewSubTask extends Component {
  // static propTypes = {};

  createSubTask({ name }) {
    return subTasksApi.create({ name, taskId: this.props.taskId });
  }

  render() {
    return (
      <Form
        submitText="Add"
        onSubmit={this.createSubTask.bind(this)}
        fields={[{
          name: "name",
          type: "text",
          label: "Enter your sub task"
        }]}
      />
    );
  }
}
