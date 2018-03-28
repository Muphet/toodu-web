import { connect } from "react-redux";
import * as actions from "../../forgotPasswordActions";

const mapStateToProps = state => ({
  fields: state.scenes.auth.forgotPassword.fields,
  errors: state.scenes.auth.forgotPassword.errors,
  flash: state.scenes.auth.forgotPassword.flash,
  submitting: state.scenes.auth.forgotPassword.submitting
});

export default connect(mapStateToProps, actions);
