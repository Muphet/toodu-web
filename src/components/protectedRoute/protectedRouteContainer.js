import { connect } from "react-redux";

const authenticatedSelector = state => state.core.auth.authenticated;
const currentUserSelector = state => state.core.auth.currentUser;

const mapStateToProps = state => ({
  authenticated: authenticatedSelector(state),
  currentUser: currentUserSelector(state)
});

export default connect(mapStateToProps, {});
