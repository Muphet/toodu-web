import UtilService from "../../services/UtilService";
import {
  GET_COMMENTS_FOR_TASK_START,
  GET_COMMENTS_FOR_TASK_SUCCESS,
  GET_COMMENTS_FOR_TASK_ERROR,
  COMMENT_CREATED
} from "./commentsConstants";

const defaultState = {
  fetching: false,
  error: false,
  data: []
};

export default function commentsReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_COMMENTS_FOR_TASK_START:
      return { ...state, fetching: true, error: false };
    case GET_COMMENTS_FOR_TASK_SUCCESS:
      return {
        ...state,
        fetching: false,
        data: UtilService.merge(state.data, action.comments)
      };
    case GET_COMMENTS_FOR_TASK_ERROR:
      return { ...state, fetching: false, error: true };
    case COMMENT_CREATED:
      return { ...state, data: state.data.concat(action.comment) };
    default:
      return state;
  }
}
