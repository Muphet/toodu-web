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
            <img
              className="comment-list-avatar"
              src={comment.user.gravatar_url}
              alt="avatar"
            />
            <p>{comment.user.first_name}</p>
            <time>
              {(() => {
                const date = new Date(comment.created_at);
                return date.toLocaleDateString();
              })()}
            </time>
            <p>{comment.content}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default commentListContainer(CommentList);
