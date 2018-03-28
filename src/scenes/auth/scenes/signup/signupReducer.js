import {
  UPDATE_FIELD,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR
} from "./signupConstants";

const defaultState = {
  errors: [],
  flash: "",
  submitting: false,
  fields: {
    email: "",
    password: "",
    passwordConfirmation: "",
    firstName: "",
    lastName: "",
    teamName: ""
  }
};

export default function signupReducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_FIELD:
      return {
        ...state,
        fields: { ...state.fields, [action.field]: action.value }
      };
    case SIGNUP_START:
      return { ...state, submitting: true };
    case SIGNUP_SUCCESS:
      return {
        ...defaultState,
        flash: `We've sent an email verification link to ${action.email}`
      };
    case SIGNUP_ERROR:
      return { ...state, submitting: false, errors: action.errors };
    default:
      return state;
  }
}
