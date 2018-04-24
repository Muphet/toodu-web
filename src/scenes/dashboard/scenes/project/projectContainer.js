import { connect } from "react-redux";
import { createSelector } from "reselect";
import { changeProject } from "./projectActions";

const projectsSelector = state => state.core.projects.data;
const currentProjectIdSelector = state => state.scenes.dashboard.project;

const currentProjectSelector = createSelector(
  [projectsSelector, currentProjectIdSelector],
  (projects, currentProjectId) =>
    projects.find(project => project.id === currentProjectId)
);

const mapStateToProps = (state, props) => ({
  project: currentProjectSelector(state, props)
});

export default connect(mapStateToProps, { changeProject });
