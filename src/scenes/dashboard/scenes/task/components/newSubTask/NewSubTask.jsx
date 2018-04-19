// import PropTypes from "prop-types";
import React, { Component } from "react";
import subTasksApi from "../../../../../../core/subTasks/subTasksApi";

export default class NewSubTask extends Component {
  // static propTypes = {};

  state = {
    submitting: false,
    errors: [],
    fields: {
      name: ""
    }
  }

  async createTask(e) {
    e.preventDefault();
    this.setState({ submitting: true });
    try {
      await subTasksApi.create({ ...this.state.fields, taskId: this.props.taskId });
      this.setState({ submitting: false, fields: { name: "" } });
    } catch (err) {
      this.setState({ submitting: false, errors: ["There was an error"] });
    }
  }

  updateField(name, value) {
    this.setState({ fields: { [name]: value } })
  }

  render() {
    return (
      <form onSubmit={this.createTask.bind(this)}>
        <input
          type="text"
          value={this.state.fields.name}
          onChange={(e) => this.updateField("name", e.target.value)}
        />
      </form>
    );
  }
}
