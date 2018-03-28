import { connect } from "react-redux";
import * as actions from "../../signupActions";

const mapStateToProps = state => ({
  fields: state.scenes.auth.signup.fields,
  errors: state.scenes.auth.signup.errors,
  flash: state.scenes.auth.signup.flash,
  submitting: state.scenes.auth.signup.submitting
});

export default connect(mapStateToProps, actions);
