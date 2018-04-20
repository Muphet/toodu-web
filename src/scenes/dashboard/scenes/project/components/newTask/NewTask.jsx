// import PropTypes from "prop-types";
import React, { Component } from "react";
import Form from "../../../../../../components/form/Form";
import tasksApi from "../../../../../../core/tasks/tasksApi";

export default class NewTask extends Component {
  // static propTypes = {};

  createTask({ name }) {
    return tasksApi.create({ name, projectId: this.props.projectId });
  }

  render() {
    return (
      <Form
        submitText="Add"
        onSubmit={this.createTask.bind(this)}
        fields={[{
          name: "name",
          type: "text",
          label: "Enter your new task"
        }]}
      />
    );
  }
}
