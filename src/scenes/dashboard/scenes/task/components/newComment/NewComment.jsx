import PropTypes from "prop-types";
import React, { Component } from "react";
import InlineForm from "../../../../../../components/inlineForm/InlineForm";
import commentApi from "../../../../../../core/comments/commentsApi";

export default class NewComment extends Component {
  static propTypes = {
    taskId: PropTypes.string.isRequired
  };

  createComment({content}) {
    return commentApi.create({ content, taskId: this.props.taskId });
  }

  render() {
    return (
      <InlineForm
        submitText="Send"
        onSubmit={this.createComment.bind(this)}
        fields={[{
          name: "content",
          type: "text",
          label: "Send a new comment"
        }]}
      />
    );
  }
}
