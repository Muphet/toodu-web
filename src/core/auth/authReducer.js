import { CHANGE_AUTHENTICATED } from "./authConstants";

const defaultState = {
  authenticated: false
};

export default function authReducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_AUTHENTICATED:
      return { ...state, authenticated: action.authenticated };
    default:
      return state;
  }
}
