import { connect } from "react-redux";
import { createSelector } from "reselect";

const projectsSelector = state => state.core.projects.data;
const currentProjectIdSelector = (state, props) => props.match.params.projectId;

const currentProjectSelector = createSelector(
  [ projectsSelector, currentProjectIdSelector ],
  (projects, currentProjectId) => projects.data.find(
    project => project.id === currentProjectId
  )
)

const mapStateToProps = (state, props) => ({
  project: currentProjectSelector(state, props)
});

export default connect(mapStateToProps, {});
