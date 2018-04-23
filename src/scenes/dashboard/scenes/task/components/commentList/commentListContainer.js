import { connect } from "react-redux";
import { createSelector } from "reselect";
import { getCommentsForTask } from "../../../../../../core/comments/commentsActions";

const commentsSelector = state => state.core.comments.data;
const currentTaskIdSelector = (state, props) => props.taskId;

const commentsForCurrentTaskSelector = createSelector(
  [ commentsSelector, currentTaskIdSelector ],
  (comments, currentTaskId) => comments.filter(
    comment => comment.parent_id === currentTaskId
  )
);

const mapStateToProps = (state, props) => ({
  comments: commentsForCurrentTaskSelector(state, props)
});

export default connect(mapStateToProps, { getCommentsForTask });
