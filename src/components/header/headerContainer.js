import { connect } from "react-redux";
import { createSelector } from "reselect";
import { getTeam } from "../../core/teams/teamsActions";
import { getUsers } from "../../core/users/usersActions";
import {
  getNotifications
} from "../../core/notifications/notificationsActions";

const teamSelector = state => state.core.team;
const notificationsSelector = state => state.core.notifications;
const authenticatedSelector = state => state.core.auth.authenticated;
const currentUserSelector = state => state.core.auth.currentUser;

const unseenNotificationCountSelector = createSelector(
  [notificationsSelector],
  notifications =>
    notifications.filter(notification => !notification.seen).length
);

const mapStateToProps = state => ({
  team: teamSelector(state),
  currentUser: currentUserSelector(state),
  authenticated: authenticatedSelector(state),
  notificationCount: unseenNotificationCountSelector(state)
});

export default connect(mapStateToProps, {
  getTeam,
  getUsers,
  getNotifications
});
