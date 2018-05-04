import { connect } from "react-redux";

const connectedSelector = state => state.core.meta.connected;

const mapStateToProps = state => ({
  connected: connectedSelector(state)
});

export default connect(mapStateToProps);
