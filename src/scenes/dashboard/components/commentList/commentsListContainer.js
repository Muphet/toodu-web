import { connect } from "react-redux";
import { createSelector } from "reselect";
import { getUsers } from "../../../../core/users/usersActions";

const usersSelector = state => state.core.users;
const commentsSelector = (state, props) => props.comments;

const sortedCommentsWithUsers = createSelector(
  [commentsSelector, usersSelector],
  (comments, users) => {
    return comments
      .map(comment => {
        if (comment.user_id) {
          comment.user = users.find(user => user.id === comment.user_id);
        }
        return comment;
      })
      .sort((a, b) => a.created_at > b.created_at);
  }
);

const mapStateToProps = (state, props) => ({
  commentsWithUsers: sortedCommentsWithUsers(state, props)
});

export default connect(mapStateToProps, { getUsers });
