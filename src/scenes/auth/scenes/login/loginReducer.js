import {
  UPDATE_FIELD,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from "./loginConstants";

const defaultState = {
  submitting: false,
  errors: [],
  fields: {
    email: "",
    password: ""
  }
};

export default function loginReducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_FIELD:
      return {
        ...state,
        fields: { ...state.fields, [action.field]: action.value }
      };
    case LOGIN_START:
      return { ...state, submitting: true };
    case LOGIN_SUCCESS:
      return defaultState;
    case LOGIN_ERROR:
      console.log(action);
      return { ...state, submitting: false, errors: action.errors };
    default:
      return state;
  }
}
