import { connect } from "react-redux";
import { openModal } from "../../dashboardActions";

const mapStateToProps = state => ({
  users: state.core.users.data
});

export default connect(mapStateToProps, { openModal });
