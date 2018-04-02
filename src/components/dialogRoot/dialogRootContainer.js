import { connect } from "react-redux";
import * as actions from "../../core/dialog/dialogActions";

const mapStateToProps = state => ({
  open: state.core.dialog.open,
  title: state.core.dialog.title,
  dialogType: state.core.dialog.dialogType
});

export default connect(mapStateToProps, actions);
