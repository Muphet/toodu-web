import {
  UPDATE_FIELD,
  NEW_PROJECT_START,
  NEW_PROJECT_SUCCESS,
  NEW_PROJECT_ERROR
} from "./newProjectFormConstants";

const defaultState = {
  submitting: false,
  errors: [],
  fields: {
    name: ""
  }
};

export default function newProjectFormReducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_FIELD:
      return {
        ...state,
        fields: { ...state.fields, [action.field]: action.value }
      };
    case NEW_PROJECT_START:
      return { ...state, submitting: true };
    case NEW_PROJECT_SUCCESS:
      return defaultState;
    case NEW_PROJECT_ERROR:
      return { ...state, submitting: false, errors: action.errors };
    default:
      return state;
  }
}
