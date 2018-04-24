import { CHANGE_PROJECT } from "./projectConstants";

export function changeProject(projectId) {
  return {
    type: CHANGE_PROJECT,
    projectId
  };
}
