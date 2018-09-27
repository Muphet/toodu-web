import { connect } from "react-redux";
import { removeToast } from '../../core/toasts/toastsActions';

const toastsSelector = state => state.core.toasts;

const mapStateToProps = state => ({
  toasts: toastsSelector(state)
});

export default connect(mapStateToProps, {
  removeToast
});
