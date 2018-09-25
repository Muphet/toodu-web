import { connect } from "react-redux";
import { openModal } from "../../core/modal/modalActions";

const locationKeySelector = state => state.router.location.key;

const mapStateToProps = state => ({
  locationKey: locationKeySelector(state)
});

export default connect(mapStateToProps, {
  openModal
});
