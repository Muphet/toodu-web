import { connect } from "react-redux";
import { createSelector } from "reselect";
import { getUsers } from "../../../../core/users/usersActions";

const usersSelector = state => state.core.users;
const taskSelector = (state, props) => props.task;

const assignedUserSelector = createSelector(
  [taskSelector, usersSelector],
  (task, users) => {
    if (task) {
      return users.find(user => user.id === task.user_id);
    }
  }
);

const mapStateToProps = (state, props) => ({
  assignedUser: assignedUserSelector(state, props)
});

export default connect(mapStateToProps, { getUsers });
