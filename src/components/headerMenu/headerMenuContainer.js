import { connect } from "react-redux";

const locationKeySelector = state => state.router.location.key;

const mapStateToProps = state => ({
  locationKey: locationKeySelector(state)
});

export default connect(mapStateToProps);
