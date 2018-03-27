import {
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from "./loginFormConstants";

const defaultState = {
  email: "",
  password: "",
  loading: false,
  errors: []
};

export default function loginFormReducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_EMAIL:
      return { ...state, email: action.email };
    case UPDATE_PASSWORD:
      return { ...state, password: action.password };
    case LOGIN_START:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return defaultState;
    case LOGIN_ERROR:
      return { ...state, loading: false, errors: action.errors };
    default:
      return state;
  }
}
