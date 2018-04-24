import { CHANGE_PROJECT } from "./projectConstants";

export default function projectReducer(state = null, action) {
  switch (action.type) {
    case CHANGE_PROJECT:
      return action.projectId;
    default:
      return state;
  }
}
