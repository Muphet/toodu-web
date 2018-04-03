import { connect } from "react-redux";
import * as actions from "./newProjectActions";

const mapStateToProps = state => ({
  fields: state.scenes.dashboard.modals.newProject.fields,
  errors: state.scenes.dashboard.modals.newProject.errors,
  submitting: state.scenes.dashboard.modals.newProject.submitting
});

export default connect(mapStateToProps, actions);
