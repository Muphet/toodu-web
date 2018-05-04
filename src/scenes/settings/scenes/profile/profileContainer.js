import { connect } from "react-redux";
import { createSelector } from "reselect";

const currentUserSelector = state => state.core.auth.currentUser;
const usersSelector = state => state.core.users;

const currentUserWithAvatarSelector = createSelector(
  [usersSelector, currentUserSelector],
  (users, currentUser) =>
    users.find(user => user.id === currentUser.id) || currentUser
);

const mapStateToProps = (state, props) => ({
  currentUser: currentUserWithAvatarSelector(state, props)
});

export default connect(mapStateToProps);
