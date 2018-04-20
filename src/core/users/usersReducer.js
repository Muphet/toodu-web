import {
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  // GET_CURRENT_USER_START,
  GET_CURRENT_USER_SUCCESS,
  // GET_CURRENT_USER_ERROR
} from "./usersConstants";

const defaultState = {
  fetching: false,
  error: false,
  currentUserId: null,
  data: []
};

export default function usersReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_USERS_START:
      return { ...state, fetching: true, error: false };
    case GET_USERS_SUCCESS:
      return { ...state, fetching: false, data: action.users };
    case GET_USERS_ERROR:
      return { ...state, fetching: false, error: true };
    case GET_CURRENT_USER_SUCCESS:
      return { ...state, currentUserId: action.user.id }
    default:
      return state;
  }
}
