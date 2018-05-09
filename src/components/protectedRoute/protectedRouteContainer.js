import { connect } from "react-redux";

const authenticatedSelector = state => state.core.auth.authenticated;
const currentUserSelector = state => state.core.auth.currentUser;
const onlineSelector = state => state.core.meta.online;

const mapStateToProps = state => ({
  authenticated: authenticatedSelector(state),
  currentUser: currentUserSelector(state),
  online: onlineSelector(state)
});

export default connect(mapStateToProps, {});
