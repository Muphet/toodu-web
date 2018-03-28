import {
  UPDATE_FIELD,
  SEND_RESET_EMAIL_START,
  SEND_RESET_EMAIL_SUCCESS,
  SEND_RESET_EMAIL_ERROR
} from "./forgotPasswordConstants";

const defaultState = {
  errors: [],
  flash: "",
  submitting: false,
  fields: {
    email: ""
  }
};

export default function forgotPasswordReducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_FIELD:
      return {
        ...state,
        fields: { ...state.fields, [action.field]: action.value }
      };
    case SEND_RESET_EMAIL_START:
      return { ...state, submitting: true };
    case SEND_RESET_EMAIL_SUCCESS:
      return {
        ...defaultState,
        flash: action.flash
      };
    case SEND_RESET_EMAIL_ERROR:
      return { ...state, submitting: false, errors: action.errors };
    default:
      return state;
  }
}
