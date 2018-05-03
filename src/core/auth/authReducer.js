import { CHANGE_AUTHENTICATED, GET_CURRENT_USER } from "./authConstants";

const defaultState = {
  authenticated: false,
  currentUser: null
};

export default function authReducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_AUTHENTICATED:
      return { ...state, authenticated: action.authenticated };
    case GET_CURRENT_USER:
      return { ...state, currentUser: action.user };
    default:
      return state;
  }
}
