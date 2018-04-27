import commentsApi from "./commentsApi";

import {
  GET_COMMENTS_FOR_TASK_START,
  GET_COMMENTS_FOR_TASK_SUCCESS,
  GET_COMMENTS_FOR_TASK_ERROR
} from "./commentsConstants";

export function getCommentsForTask(taskId) {
  return dispatch => {
    dispatch({ type: GET_COMMENTS_FOR_TASK_START });
    commentsApi
      .get({ task_id: taskId })
      .then(res => {
        dispatch({ type: GET_COMMENTS_FOR_TASK_SUCCESS, comments: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: GET_COMMENTS_FOR_TASK_ERROR });
      });
  };
}
