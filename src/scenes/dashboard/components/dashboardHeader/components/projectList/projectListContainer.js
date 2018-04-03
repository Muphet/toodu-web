import { connect } from "react-redux";
import { getProjects } from "../../../../../../core/projects/projectsActions";

const mapStateToProps = state => ({
  projects: state.core.projects.data,
  fetching: state.core.projects.fetching,
  error: state.core.projects.error
});

export default connect(mapStateToProps, { getProjects });
