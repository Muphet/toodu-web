import { CHANGE_TASK } from "./taskConstants";

export function changeTask(taskId) {
  return {
    type: CHANGE_TASK,
    taskId
  };
}
