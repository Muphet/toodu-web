// import PropTypes from "prop-types";
import React, { Component } from "react";
import InlineForm from "../../../../../../components/inlineForm/InlineForm";
import commentApi from "../../../../../../core/comments/commentsApi";

export default class NewComment extends Component {
  // static propTypes = {};

  createComment(content) {
    return commentApi.create({ content, taskId: this.props.taskId });
  }

  render() {
    return (
      <InlineForm
        submitText="Send"
        onSubmit={this.createComment.bind(this)}
        field={{
          name: "content",
          type: "text",
          label: "Type your comment"
        }}
      />
    );
  }
}
