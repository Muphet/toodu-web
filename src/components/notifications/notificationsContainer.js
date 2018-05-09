import { connect } from "react-redux";
import { createSelector } from "reselect";
import {
  getNotifications
} from "../../core/notifications/notificationsActions";
import { getTask } from "../../core/tasks/tasksActions";
import { getUsers } from "../../core/users/usersActions";

const notificationsSelector = state => state.core.notifications;
const currentUserSelector = state => state.core.auth.currentUser;
const usersSelector = state => state.core.users;
const tasksSelector = state => state.core.tasks;

const unseenNotificationsSelector = createSelector(
  [notificationsSelector],
  notifications => notifications.filter(notification => !notification.seen)
);

const notificationsWithActorSelector = createSelector(
  [unseenNotificationsSelector, usersSelector],
  (notifications, users) => {
    return notifications.map(notification => {
      notification.actor = users.find(
        user => user.id === notification.actor_id
      );
      return notification;
    });
  }
);

const notificationsWithActorAndTaskSelector = createSelector(
  [notificationsWithActorSelector, tasksSelector],
  (notifications, tasks) => {
    return notifications.map(notification => {
      notification.task = tasks.find(
        task => task.id === notification.task_id
      ) || {};
      return notification;
    });
  }
);

const mapStateToProps = state => ({
  notifications: notificationsWithActorAndTaskSelector(state),
  currentUser: currentUserSelector(state)
});

export default connect(mapStateToProps, {
  getNotifications,
  getTask,
  getUsers
});
