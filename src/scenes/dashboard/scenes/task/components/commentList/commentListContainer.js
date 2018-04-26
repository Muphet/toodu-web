import { connect } from "react-redux";
import { createSelector } from "reselect";
import { getCommentsForTask } from "../../../../../../core/comments/commentsActions";

const commentsSelector = state => state.core.comments.data;
const usersSelector = state => state.core.users.data;
const currentTaskIdSelector = (state, props) => props.taskId;

const commentsForCurrentTaskSelector = createSelector(
  [commentsSelector, currentTaskIdSelector, usersSelector],
  (comments, currentTaskId, users) =>
    comments
      .filter(comment => comment.parent_id === currentTaskId)
      .map((comment) => {
        comment.user = users.find((user) => user.id === comment.user_id);
        return comment;
      })
);

const mapStateToProps = (state, props) => ({
  comments: commentsForCurrentTaskSelector(state, props)
});

export default connect(mapStateToProps, { getCommentsForTask });
