import { connect } from "react-redux";
import { closeModal } from "../../dashboardActions";

const mapStateToProps = state => ({
  activeModal: state.scenes.dashboard.activeModal
});

export default connect(mapStateToProps, { closeModal });
