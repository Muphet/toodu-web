import {
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_CONFIRMATION,
  UPDATE_FIRST_NAME,
  UPDATE_LAST_NAME,
  UPDATE_TEAM_NAME,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from "./signupFormConstants";

const defaultState = {
  errors: [],
  message: "",
  loading: false,
  email: "",
  password: "",
  passwordConfirmation: "",
  firstName: "",
  lastName: "",
  teamName: ""
};

export default function signupFormReducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_EMAIL:
      return { ...state, email: action.email };
    case UPDATE_PASSWORD:
      return { ...state, password: action.password };
    case UPDATE_PASSWORD_CONFIRMATION:
      return { ...state, passwordConfirmation: action.passwordConfirmation };
    case UPDATE_FIRST_NAME:
      return { ...state, firstName: action.firstName };
    case UPDATE_LAST_NAME:
      return { ...state, lastName: action.lastName };
    case UPDATE_TEAM_NAME:
      return { ...state, teamName: action.teamName };
    case SIGNUP_START:
      return { ...state, loading: true };
    case SIGNUP_SUCCESS:
      return {
        ...defaultState,
        message: "We've sent an email verification link to " + action.email
      };
    case SIGNUP_ERROR:
      return { ...state, loading: false, errors: action.errors };
    default:
      return state;
  }
}
