import { connect } from "react-redux";

const authenticatedSelector = state => state.core.auth.authenticated;

const mapStateToProps = state => ({
  authenticated: authenticatedSelector(state)
});

export default connect(mapStateToProps, {});
