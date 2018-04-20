import { connect } from "react-redux";
import { getCommentsForTask } from "../../../../../../core/comments/commentsActions";

const mapStateToProps = (state, props) => ({
  fetching: state.core.comments.fetching,
  error: state.core.comments.error,
  comments: state.core.comments.data.filter(
    comment => comment.parent_id === props.taskId
  )
});

export default connect(mapStateToProps, { getCommentsForTask });
