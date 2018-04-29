import { connect } from "react-redux";
import { createSelector } from "reselect";
import { openModal } from "../../dashboardActions";

const projectsSelector = state => state.core.projects.data;
const selectedProjectIdSelector = state => state.scenes.dashboard.activeProject;

const selectedProjectSelector = createSelector(
  [projectsSelector, selectedProjectIdSelector],
  (projects, selectedProjectId) =>
    projects.find(project => project.id === selectedProjectId)
);

const mapStateToProps = state => ({
  selectedProject: selectedProjectSelector(state)
});

export default connect(mapStateToProps, { openModal });
