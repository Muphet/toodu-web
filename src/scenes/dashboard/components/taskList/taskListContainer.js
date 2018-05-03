import { connect } from "react-redux";
import { createSelector } from "reselect";
import { getUsers } from "../../../../core/users/usersActions";

const usersSelector = state => state.core.users;
const tasksSelector = (state, props) => props.tasks;

const tasksWithUsers = createSelector(
  [tasksSelector, usersSelector],
  (tasks, users) => {
    return tasks.map(task => {
      if (task.user_id) {
        task.user = users.find(user => user.id === task.user_id);
      }
      return task;
    });
  }
);

const mapStateToProps = (state, props) => ({
  tasksWithUsers: tasksWithUsers(state, props)
});

export default connect(mapStateToProps, { getUsers });
