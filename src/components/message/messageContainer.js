import { connect } from 'react-redux';
import { updateMessage } from '../../core/message/messageActions';

const mapStateToProps = state => ({ message: state.core.message });

export default connect(mapStateToProps, { updateMessage });
