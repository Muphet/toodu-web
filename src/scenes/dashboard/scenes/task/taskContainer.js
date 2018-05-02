import { connect } from "react-redux";
import { createSelector } from "reselect";
import { changeTask } from "../../dashboardActions";

const tasksSelector = state => state.core.tasks.data;
const usersSelector = state => state.core.users.data;
const currentTaskIdSelector = state => state.scenes.dashboard.activeTask;

const taskSelector = createSelector(
  [tasksSelector, currentTaskIdSelector],
  (tasks, currentTaskId) => tasks.find(task => task.id === currentTaskId)
);

const assignedUserSelector = createSelector(
  [taskSelector, usersSelector],
  (task, users) => {
    if (task) {
      return users.find(user => user.id === task.user_id);
    }
  }
);

const mapStateToProps = (state, props) => ({
  task: taskSelector(state, props),
  assignedUser: assignedUserSelector(state)
});

export default connect(mapStateToProps, { changeTask });
