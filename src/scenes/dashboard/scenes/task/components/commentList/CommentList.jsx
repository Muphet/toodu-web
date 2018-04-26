import "./commentList.scss";
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
      <ul className="comment-list">
        {this.props.comments.map(comment => (
          <li className="card" key={comment.id}>
            <div className="card-content">
              <div className="media" key={comment.id}>
                <div className="media-left">
                  <figure className="image is-32x32">
                    <img
                      className="comment-list-avatar"
                      src={comment.user.gravatar_url}
                      alt="avatar"
                    />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="has-text-weight-bold">
                    {comment.user.first_name}
                  </p>
                  <time
                    className="comment-list-time"
                    dateTime={comment.created_at}
                  >
                    {(() => {
                      const date = new Date(comment.created_at);
                      return date.toLocaleDateString();
                    })()}
                  </time>
                  <p>{comment.content}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default commentListContainer(CommentList);
