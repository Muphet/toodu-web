import commentsApi from "./commentsApi";

import { GET_COMMENTS_FOR_TASK } from "./commentsConstants";

export function getCommentsForTask(taskId) {
  return dispatch => {
    return commentsApi.get({ taskId }).then(res => {
      dispatch({ type: GET_COMMENTS_FOR_TASK, comments: res.data });
      return res.data;
    });
  };
}
