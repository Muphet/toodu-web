import UtilService from "../../services/UtilService";
import { GET_COMMENTS_FOR_TASK, COMMENT_CREATED } from "./commentsConstants";

const defaultState = [];

export default function commentsReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_COMMENTS_FOR_TASK:
      return UtilService.merge(state, action.comments);
    case COMMENT_CREATED:
      return state.concat(action.comment);
    default:
      return state;
  }
}
