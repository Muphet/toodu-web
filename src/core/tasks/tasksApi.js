import ApiService from "../../services/ApiService";

const tasksApi = {
  getForProject(projectId) {
    return ApiService.get("/tasks", { project_id: projectId });
  },

  create(task) {
    return ApiService.post("/tasks", {
      name: task.name,
      project_id: task.projectId
    });
  }
};

export default tasksApi;
