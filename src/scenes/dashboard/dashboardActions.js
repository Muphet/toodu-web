import { CHANGE_PROJECT, CHANGE_TASK } from "./dashboardConstants";

export function changeProject(projectId) {
  return {
    type: CHANGE_PROJECT,
    projectId
  };
}

export function changeTask(taskId) {
  return {
    type: CHANGE_TASK,
    taskId
  };
}
