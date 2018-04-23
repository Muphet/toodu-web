import { connect } from "react-redux";
import { closeModal } from "../../dashboardActions";

const activeModalSelector = state => state.scenes.dashboard.activeModal;

const mapStateToProps = state => ({
  activeModal: activeModalSelector(state)
});

export default connect(mapStateToProps, { closeModal });
