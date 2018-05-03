import { connect } from "react-redux";
import { createSelector } from "reselect";
import { getTeam } from "../../core/teams/teamsActions";
import { openModal } from "../../core/modal/modalActions";
import { getUsers } from "../../core/users/usersActions";

const teamSelector = state => state.core.team;
const usersSelector = state => state.core.users;
const authenticatedSelector = state => state.core.auth.authenticated;
const currentUserSelector = state => state.core.auth.currentUser;

const currentUserWithAvatarSelector = createSelector(
  [authenticatedSelector, usersSelector, currentUserSelector],
  (authenticated, users, currentUser) => {
    if (!authenticated) return null;
    return users.find(user => user.id === currentUser.id);
  }
);

const mapStateToProps = state => ({
  team: teamSelector(state),
  currentUser: currentUserWithAvatarSelector(state),
  authenticated: authenticatedSelector(state)
});

export default connect(mapStateToProps, {
  getTeam,
  getUsers,
  openModal
});
