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
    if (!this.props.comments.length) return <p>No comments yet</p>;
    console.log(this.props.comments)
    return (
      <ul className="comment-list">
        {this.props.comments.map(comment => (
          <li className="media" key={comment.id}>
            <div className="media-left">
              <figure className="image is-48x48">
                <img className="comment-list-avatar" src={comment.user.gravatar_url} alt="avatar" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{comment.user.first_name}</p>
              <p className="subtitle is-6">{comment.content}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default commentListContainer(CommentList);
