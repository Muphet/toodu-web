import PropTypes from "prop-types";
import React, { Component } from "react";
import commentListContainer from "./commentsListContainer";

export class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    commentsWithUsers: PropTypes.array.isRequired
  };

  componentDidMount(e) {
    this.props.getUsers();
  }

  render() {
    if (!this.props.commentsWithUsers.length)
      return (
        <div className="empty empty--white">
          <p>No comments yet...</p>
        </div>
      );

    return (
      <ul className="commentList">
        {this.props.commentsWithUsers.map(
          comment =>
            comment.user &&
            <li key={comment.id} className="commentList__comment">
              <img
                className="commentList__avatar"
                src={comment.user.gravatar_url}
                alt="avatar"
              />
              <div className="commentList__wrapper">
                <h6 className="commentList__name">
                  {comment.user.first_name + " " + comment.user.last_name}
                </h6>
                <time className="commentList__time">
                  {new Date(comment.created_at).toLocaleDateString()}
                </time>
                <p className="commentList__content">{comment.content}</p>
              </div>
            </li>
        )}
      </ul>
    );
  }
}

export default commentListContainer(CommentList);
