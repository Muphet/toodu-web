import { connect } from "react-redux";

const connectedSelector = state => state.core.meta.connected;
const onlineSelector = state => state.core.meta.online;

const mapStateToProps = state => ({
  connected: connectedSelector(state),
  online: onlineSelector(state)
});

export default connect(mapStateToProps);
