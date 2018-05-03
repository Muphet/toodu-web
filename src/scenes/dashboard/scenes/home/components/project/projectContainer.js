import { connect } from "react-redux";
import { createSelector } from "reselect";
import { getProject } from "../../../../../../core/projects/projectsActions";
import { getTasksForProject } from "../../../../../../core/tasks/tasksActions";
import { changeProject } from "../../../../dashboardActions";

const projectsSelector = state => state.core.projects;
const currentProjectIdSelector = state => state.scenes.dashboard.activeProject;
const tasksSelector = state => state.core.tasks;
const activeTaskIdSelector = state => state.scenes.dashboard.activeTask;

const currentProjectSelector = createSelector(
  [projectsSelector, currentProjectIdSelector],
  (projects, currentProjectId) =>
    projects.find(project => project.id === currentProjectId)
);

const tasksForCurrentProjectSelector = createSelector(
  [tasksSelector, currentProjectIdSelector],
  (tasks, currentProjectId) =>
    tasks
      .filter(task => task.project_id === currentProjectId)
      .sort((a, b) => (a.completed ? 1 : -1))
);

const mapStateToProps = (state, props) => ({
  project: currentProjectSelector(state, props),
  tasks: tasksForCurrentProjectSelector(state, props),
  currentTaskId: activeTaskIdSelector(state, props)
});

export default connect(mapStateToProps, {
  changeProject,
  getProject,
  getTasksForProject
});
