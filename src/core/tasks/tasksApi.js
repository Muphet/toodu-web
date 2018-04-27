import ApiService from "../../services/ApiService";

const tasksApi = {
  get(params) {
    return ApiService.get("/tasks", params);
  },

  create(task) {
    return ApiService.post("/tasks", task);
  },

  update(id, task) {
    return ApiService.put(`/tasks/${id}`, task);
  }
};

export default tasksApi;
