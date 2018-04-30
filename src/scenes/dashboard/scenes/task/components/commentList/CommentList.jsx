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
      <ul className="commentList">
        {this.props.comments.map(comment => (
          <li key={comment.id} className="commentList__comment">
            <img
              className="commentList__avatar"
              src={comment.user.gravatar_url}
              alt="avatar"
            />
            <div className="commentList__wrapper">
              <h6 className="commentList__name">{comment.user.first_name}</h6>
              <time className="commentList__time">{comment.created_at}</time>
              <p className="commentList__content">{comment.content}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default commentListContainer(CommentList);
