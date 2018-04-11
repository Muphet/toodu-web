import { connect } from "react-redux";

const mapStateToProps = (state, props) => ({
  project: state.core.projects.data.find(
    project => project.id === props.match.params.projectId
  )
});

export default connect(mapStateToProps, {});
