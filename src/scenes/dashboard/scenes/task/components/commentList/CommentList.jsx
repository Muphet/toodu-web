// import PropTypes from "prop-types";
import React, { Component } from "react";
import commentListContainer from "./commentListContainer.js";

export class CommentList extends Component {
  static propTypes = {};

  async componentDidMount(e) {
    this.props.getCommentsForTask(this.props.taskId);
  }

  render() {
    if (this.props.error) return <p>There was an error</p>;
    if (this.props.fetching) return <p>Fetching comments...</p>;
    if (!this.props.comments.length) return <p>No comments yet</p>;
    return (
      <ul>
        {this.props.comments.map(comment => (
          <li key={comment.id}>
            {comment.content}
          </li>
        ))}
      </ul>
    );
  }
}

export default commentListContainer(CommentList);
