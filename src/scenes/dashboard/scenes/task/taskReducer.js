import { CHANGE_TASK } from "./taskConstants";

export default function taskReducer(state = null, action) {
  switch (action.type) {
    case CHANGE_TASK:
      return action.taskId;
    default:
      return state;
  }
}
