import { connect } from "react-redux";
import * as actions from "./loginFormActions";

const mapStateToProps = state => ({
  email: state.scenes.auth.login.loginForm.email,
  password: state.scenes.auth.login.loginForm.password,
  errors: state.scenes.auth.login.loginForm.errors,
  loading: state.scenes.auth.login.loginForm.loading
});

export default connect(mapStateToProps, actions);
