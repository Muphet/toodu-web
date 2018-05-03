import { connect } from "react-redux";
import { createSelector } from "reselect";
import { getTasksForUser } from "../../../../../../core/tasks/tasksActions";
import { getProjects } from "../../../../../../core/projects/projectsActions";

const currentUserSelector = state => state.core.auth.currentUser;
const tasksSelector = state => state.core.tasks;
const projectsSelector = state => state.core.projects;

const tasksByProjectForCurrentUserSelector = createSelector(
  [tasksSelector, currentUserSelector],
  (tasks, currentUser) =>
    tasks.reduce((grouped, task) => {
      if (task.user_id !== currentUser.id) return grouped;
      if (!grouped[task.project_id]) grouped[task.project_id] = [];
      grouped[task.project_id].push(task);
      return grouped;
    }, {})
);

const mapStateToProps = (state, props) => ({
  currentUser: currentUserSelector(state, props),
  tasksByProject: tasksByProjectForCurrentUserSelector(state, props),
  projects: projectsSelector(state, props)
});

export default connect(mapStateToProps, {
  getTasksForUser,
  getProjects
});
