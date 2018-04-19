// import PropTypes from "prop-types";
import React, { Component } from "react";
import commentApi from "../../../../../../core/comments/commentsApi";

export default class NewComment extends Component {
  // static propTypes = {};

  state = {
    submitting: false,
    errors: [],
    fields: {
      content: ""
    }
  }

  async createComment(e) {
    e.preventDefault();
    this.setState({ submitting: true });
    try {
      await commentApi.create({ ...this.state.fields, taskId: this.props.taskId });
      this.setState({ submitting: false, fields: { content: "" } });
    } catch (err) {
      console.log(err.response)
      this.setState({ submitting: false, errors: ["There was an error"] });
    }
  }

  updateField(name, value) {
    this.setState({ fields: { [name]: value } })
  }

  render() {
    return (
      <form onSubmit={this.createComment.bind(this)}>
        <input
          type="text"
          value={this.state.fields.content}
          onChange={(e) => this.updateField("content", e.target.value)}
        />
      </form>
    );
  }
}
