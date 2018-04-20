import { connect } from "react-redux";
import { getTeam } from "../../core/teams/teamsActions";
import { getUsers, getCurrentUser } from "../../core/users/usersActions";

const mapStateToProps = state => ({
  team: state.core.team.data,
  users: state.core.users.data,
  currentUser: state.core.users.data.find((user) => (
    user.id === state.core.users.currentUserId
  ))
});

export default connect(mapStateToProps, { getTeam, getUsers, getCurrentUser });
