import {
  UPDATE_FIELD,
  RESET_PASSWORD_START,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR
} from "./resetPasswordConstants";

const defaultState = {
  errors: [],
  submitting: false,
  flash: "",
  fields: {
    password: "",
    passwordConfirmation: ""
  }
};

export default function resetPasswordReducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_FIELD:
      return {
        ...state,
        fields: { ...state.fields, [action.field]: action.value }
      };
    case RESET_PASSWORD_START:
      return { ...state, submitting: true };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...defaultState,
        flash: action.flash
      };
    case RESET_PASSWORD_ERROR:
      return { ...state, submitting: false, errors: action.errors };
    default:
      return state;
  }
}
