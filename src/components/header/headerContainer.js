import { connect } from "react-redux";
import { createSelector } from "reselect";
import { getTeam } from "../../core/teams/teamsActions";
import { getUsers, getCurrentUser } from "../../core/users/usersActions";

const teamSelector = state => state.core.team.data;
const usersSelector = state => state.core.users.data;
const currentUserIdSelector = state => state.core.users.currentUserId;

const currentUserSelector = createSelector(
  [ usersSelector, currentUserIdSelector ],
  (users, currentUserId) => users.find((user) => (
    user.id === currentUserId
  ))
);

const mapStateToProps = state => ({
  team: teamSelector(state),
  currentUser: currentUserSelector(state)
});

export default connect(mapStateToProps, { getTeam, getUsers, getCurrentUser });
