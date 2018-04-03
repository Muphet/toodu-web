import { connect } from "react-redux";
import { openModal, closeModal } from "../../dashboardActions";

const mapStateToProps = state => ({
  activeModal: state.scenes.dashboard.activeModal
});

export default connect(mapStateToProps, { openModal, closeModal });
