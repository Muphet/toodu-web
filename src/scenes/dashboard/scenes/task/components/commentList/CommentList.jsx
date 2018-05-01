import PropTypes from "prop-types";
import React, { Component } from "react";
import commentListContainer from "./commentListContainer.js";

export class CommentList extends Component {
  static propTypes = {
    getCommentsForTask: PropTypes.func.isRequired,
    taskId: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired
  };

  async componentDidMount(e) {
    this.props.getCommentsForTask(this.props.taskId);
  }

  render() {
    if (!this.props.comments.length) return null;

    return (
      <ul>
        {this.props.comments.map(comment => (
          <li key={comment.id}>
            <img src={comment.user.gravatar_url} alt="avatar" />
            <div>
              <h6>{comment.user.first_name}</h6>
              <time>{comment.created_at}</time>
              <p>{comment.content}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default commentListContainer(CommentList);
