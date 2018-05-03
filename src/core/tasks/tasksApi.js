import ApiService from "../../services/ApiService";

const tasksApi = {
  get(params) {
    return ApiService.get("/tasks", params);
  },

  getOne(id) {
    return ApiService.get(`/tasks/${id}`);
  },

  create(task) {
    return ApiService.post("/tasks", task);
  },

  update(id, task) {
    return ApiService.put(`/tasks/${id}`, task);
  },

  destroy(id) {
    return ApiService.delete(`/tasks/${id}`);
  }
};

export default tasksApi;
