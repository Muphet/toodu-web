import { connect } from "react-redux";
import { getTeam } from "../../../../core/teams/teamsActions";

const currentUserSelector = state => state.core.auth.currentUser;
const teamSelector = state => state.core.team;

const mapStateToProps = (state, props) => ({
  currentUser: currentUserSelector(state, props),
  team: teamSelector(state, props)
});

export default connect(mapStateToProps, { getTeam });
