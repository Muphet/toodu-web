import { connect } from "react-redux";
import * as actions from "./signupFormActions";

const mapStateToProps = state => ({
  email: state.scenes.auth.signup.signupForm.email,
  password: state.scenes.auth.signup.signupForm.password,
  passwordConfirmation: state.scenes.auth.signup.signupForm
    .passwordConfirmation,
  firstName: state.scenes.auth.signup.signupForm.firstName,
  lastName: state.scenes.auth.signup.signupForm.lastName,
  teamName: state.scenes.auth.signup.signupForm.teamName,
  errors: state.scenes.auth.signup.signupForm.errors,
  message: state.scenes.auth.signup.signupForm.message,
  loading: state.scenes.auth.signup.signupForm.loading
});

export default connect(mapStateToProps, actions);
