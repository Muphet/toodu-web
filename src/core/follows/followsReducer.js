import UtilService from "../../services/UtilService";
import { GET_FOLLOWS, CREATE_FOLLOW, DESTROY_FOLLOW } from "./followsConstants";

const defaultState = [];

export default function followsReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_FOLLOWS:
      return action.follows;
    case CREATE_FOLLOW:
      return state.concat(action.follow);
    case DESTROY_FOLLOW:
      return UtilService.removeById(state, action.follow);
    default:
      return state;
  }
}
