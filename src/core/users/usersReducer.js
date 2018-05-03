import UtilService from "../../services/UtilService";
import { GET_USERS, USER_CREATED, USER_UPDATED } from "./usersConstants";

const defaultState = [];

export default function usersReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_USERS:
      return action.users;
    case USER_CREATED:
      return state.concat(action.user);
    case USER_UPDATED:
      return UtilService.merge(state, action.user);
    default:
      return state;
  }
}
