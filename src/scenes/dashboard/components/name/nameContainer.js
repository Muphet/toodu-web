import { connect } from "react-redux";
import * as actions from "./nameActions";

const mapStateToProps = state => ({ name: state.scenes.dashboard.name });

export default connect(mapStateToProps, actions);
