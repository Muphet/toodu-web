import { connect } from "react-redux";

const currentUserSelector = state => state.core.auth.currentUser;

const mapStateToProps = (state, props) => ({
  currentUser: currentUserSelector(state, props)
});

export default connect(mapStateToProps);
