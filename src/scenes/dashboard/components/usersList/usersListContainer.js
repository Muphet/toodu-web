import { connect } from "react-redux";
import { openModal } from "../../../../core/modal/modalActions";

const usersSelector = state => state.core.users.data;

const mapStateToProps = state => ({
  users: usersSelector(state)
});

export default connect(mapStateToProps, { openModal });
