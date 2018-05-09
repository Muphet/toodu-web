import { connect } from "react-redux";
import { createSelector } from "reselect";
import { getUsers } from "../../../../core/users/usersActions";
import {
  getFollows,
  createFollow,
  destroyFollow
} from "../../../../core/follows/followsActions";

const usersSelector = state => state.core.users;
const currentUserSelector = state => state.core.auth.currentUser;
const followsSelector = state => state.core.follows;
const taskSelector = (state, props) => props.task;

const assignedUserSelector = createSelector(
  [taskSelector, usersSelector],
  (task, users) => {
    if (task) {
      return users.find(user => user.id === task.user_id);
    }
  }
);

const followSelector = createSelector(
  [taskSelector, followsSelector],
  (task, follows) => {
    return follows.find(follow => follow.task_id === task.id);
  }
);

const mapStateToProps = (state, props) => ({
  assignedUser: assignedUserSelector(state, props),
  follow: followSelector(state, props),
  currentUser: currentUserSelector(state)
});

export default connect(mapStateToProps, {
  getUsers,
  getFollows,
  createFollow,
  destroyFollow
});
