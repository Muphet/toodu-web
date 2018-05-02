import { connect } from "react-redux";
import { navigate } from "../../core/router/routerActions";
import { closeModal } from "../../core/modal/modalActions";

export default connect(null, { closeModal, navigate });
