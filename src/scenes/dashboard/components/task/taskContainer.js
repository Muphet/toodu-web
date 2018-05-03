import { connect } from "react-redux";
import { createSelector } from "reselect";
import { getTask } from "../../../../core/tasks/tasksActions";
import { getSubTasksForTask } from "../../../../core/subTasks/subTasksActions";
import { getCommentsForTask } from "../../../../core/comments/commentsActions";
import { changeTask } from "../../dashboardActions";

const tasksSelector = state => state.core.tasks;
const subTasksSelector = state => state.core.subTasks;
const commentsSelector = state => state.core.comments;
const usersSelector = state => state.core.users;
const currentTaskIdSelector = (state, props) => props.match.params.taskId;

const taskSelector = createSelector(
  [tasksSelector, currentTaskIdSelector],
  (tasks, currentTaskId) => tasks.find(task => task.id === currentTaskId)
);

const subTasksForTaskSelector = createSelector(
  [subTasksSelector, currentTaskIdSelector],
  (subTasks, currentTaskId) =>
    subTasks.filter(subTask => subTask.task_id === currentTaskId)
);

const commentsForTaskSelector = createSelector(
  [commentsSelector, currentTaskIdSelector],
  (comments, currentTaskId) =>
    comments.filter(comment => comment.task_id === currentTaskId)
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
  comments: commentsForTaskSelector(state, props),
  subTasks: subTasksForTaskSelector(state, props),
  assignedUser: assignedUserSelector(state, props)
});

export default connect(mapStateToProps, {
  changeTask,
  getTask,
  getSubTasksForTask,
  getCommentsForTask
});
