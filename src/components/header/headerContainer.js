import { connect } from "react-redux";
import { getTeam } from "../../core/teams/teamsActions";
import { openModal } from "../../core/modal/modalActions";
import { getUsers } from "../../core/users/usersActions";

const teamSelector = state => state.core.team;
const authenticatedSelector = state => state.core.auth.authenticated;
const currentUserSelector = state => state.core.auth.currentUser;

const mapStateToProps = state => ({
  team: teamSelector(state),
  currentUser: currentUserSelector(state),
  authenticated: authenticatedSelector(state)
});

export default connect(mapStateToProps, {
  getTeam,
  getUsers,
  openModal
});
