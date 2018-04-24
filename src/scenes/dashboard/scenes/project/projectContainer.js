import { connect } from "react-redux";
import { createSelector } from "reselect";
import { changeProject } from "../../dashboardActions";

const projectsSelector = state => state.core.projects.data;
const currentProjectIdSelector = state => state.scenes.dashboard.activeProject;

const currentProjectSelector = createSelector(
  [projectsSelector, currentProjectIdSelector],
  (projects, currentProjectId) =>
    projects.find(project => project.id === currentProjectId)
);

const mapStateToProps = (state, props) => ({
  project: currentProjectSelector(state, props)
});

export default connect(mapStateToProps, { changeProject });
