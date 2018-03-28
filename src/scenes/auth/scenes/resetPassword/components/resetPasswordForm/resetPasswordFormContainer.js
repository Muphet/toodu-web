import { connect } from "react-redux";
import * as actions from "../../resetPasswordActions";

const mapStateToProps = state => ({
  fields: state.scenes.auth.resetPassword.fields,
  errors: state.scenes.auth.resetPassword.errors,
  flash: state.scenes.auth.resetPassword.flash,
  submitting: state.scenes.auth.resetPassword.submitting
});

export default connect(mapStateToProps, actions);
