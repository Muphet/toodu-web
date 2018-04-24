import {
  CLOSE_MODAL,
  OPEN_MODAL,
  CHANGE_PROJECT,
  CHANGE_TASK
} from "./dashboardConstants";

export function openModal(modal) {
  return {
    type: OPEN_MODAL,
    modal
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  };
}

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
