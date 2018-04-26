import PropTypes from "prop-types";
import React, { Component } from "react";
import InlineForm from "../../../../../../components/inlineForm/InlineForm";
import tasksApi from "../../../../../../core/tasks/tasksApi";

export default class NewTask extends Component {
  static propTypes = {
    projectId: PropTypes.string.isRequired
  };

  createTask({name}) {
    return tasksApi.create({ name, projectId: this.props.projectId });
  }

  render() {
    return (
      <InlineForm
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
