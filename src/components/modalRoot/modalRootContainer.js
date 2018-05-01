import { connect } from "react-redux";
import { closeModal } from "../../core/modal/modalActions";

const activeModalSelector = state => state.core.modal;

const mapStateToProps = state => ({
  modal: activeModalSelector(state)
});

export default connect(mapStateToProps, { closeModal });
