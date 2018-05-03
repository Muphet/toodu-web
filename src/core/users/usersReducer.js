import { GET_USERS } from "./usersConstants";

const defaultState = [];

export default function usersReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_USERS:
      return action.users;
    default:
      return state;
  }
}
