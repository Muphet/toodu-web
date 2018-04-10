import { connect } from "react-redux";
import * as actions from "./newProjectFormActions";

const mapStateToProps = state => ({
  fields: state.scenes.dashboard.newProjectForm.fields,
  errors: state.scenes.dashboard.newProjectForm.errors,
  submitting: state.scenes.dashboard.newProjectForm.submitting
});

export default connect(mapStateToProps, actions);
