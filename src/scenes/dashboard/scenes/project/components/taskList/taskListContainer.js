import { connect } from "react-redux";
import { createSelector } from "reselect";
import { getTasksForProject } from "../../../../../../core/tasks/tasksActions";

const tasksSelector = state => state.core.tasks.data;
const currentProjectIdSelector = (state, props) => props.projectId;

const tasksForCurrentProjectSelector = createSelector(
  [tasksSelector, currentProjectIdSelector],
  (tasks, currentProjectId) =>
    tasks.filter(task => task.project_id === currentProjectId)
);

const mapStateToProps = (state, props) => ({
  tasks: tasksForCurrentProjectSelector(state, props)
});

export default connect(mapStateToProps, { getTasksForProject });
