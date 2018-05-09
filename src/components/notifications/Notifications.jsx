import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import notificationsApi from "../../core/notifications/notificationsApi";
import notificationsContainer from "./notificationsContainer";

export class Notifications extends Component {
  static propTypes = {
    getNotifications: PropTypes.func.isRequired,
    getTask: PropTypes.func.isRequired,
    getUsers: PropTypes.func.isRequired,
    onClickOutside: PropTypes.func.isRequired,
    notifications: PropTypes.array
  };

  handleOutsideClick = this.handleOutsideClick.bind(this);

  componentDidMount() {
    this.props.getNotifications();
    this.props.getUsers();
    this.getTasks();
    document.addEventListener("click", this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleOutsideClick, false);
  }

  getTasks() {
    this.props.notifications
      .map(notification => notification.task_id)
      .filter((id, index, ids) => ids.indexOf(id) === index)
      .forEach(this.props.getTask);
  }

  markAsSeen() {
    this.props.notifications.forEach(notification =>
      notificationsApi.update(notification.id, { seen: true })
    );
  }

  handleOutsideClick(e) {
    if (!this.node.contains(e.target)) {
      this.close();
    }
  }

  close() {
    this.markAsSeen();
    this.props.onClickOutside();
  }

  render() {
    return (
      <ul
        className="dropdown notifications"
        ref={node => {
          this.node = node;
        }}
      >
        {!this.props.notifications.length && (
          <li className="notifications__notification">No new notifications</li>
        )}
        {this.props.notifications.map(notification => (
          <li key={notification.id} className="dropdown__item">
            <Link
              className="notifications__notification"
              onClick={this.close.bind(this)}
              to={`/dashboard/project/${notification.task.project_id}/task/${
                notification.task_id
              }`}
            >
              {notification.actor ? (
                <img
                  src={notification.actor.gravatar_url}
                  alt={`${notification.actor.first_name}'s avatar`}
                  className="notifications__avatar"
                />
              ) : (
                <img
                  src={this.props.currentUser.gravatar_url}
                  alt="Your avatar"
                  className="notifications__avatar"
                />
              )}
              <p className="notifications__text">{notification.message}</p>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default notificationsContainer(Notifications);
