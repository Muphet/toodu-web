import { connect } from "react-redux";
import * as actions from "../../loginActions";

const mapStateToProps = state => ({
  fields: state.scenes.auth.login.fields,
  errors: state.scenes.auth.login.errors,
  submitting: state.scenes.auth.login.submitting
});

export default connect(mapStateToProps, actions);
