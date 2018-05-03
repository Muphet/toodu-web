import PropTypes from "prop-types";
import React, { Component } from "react";
import Form from "../../../../components/form/Form";
import commentApi from "../../../../core/comments/commentsApi";

export default class NewComment extends Component {
  static propTypes = {
    taskId: PropTypes.string.isRequired
  };

  createComment({ content }) {
    const taskId = this.props.taskId;
    return commentApi.create({ content, taskId });
  }

  render() {
    return (
      <Form
        submitText="Send"
        onSubmit={this.createComment.bind(this)}
        fields={[
          {
            name: "content",
            type: "textarea",
            label: "Post a new comment",
            showLabel: false
          }
        ]}
      />
    );
  }
}
