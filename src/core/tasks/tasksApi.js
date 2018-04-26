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
  },

  update(task) {
    return ApiService.put(`/tasks/${task.id}`, {
      completed: task.completed
    });
  }
};

export default tasksApi;
