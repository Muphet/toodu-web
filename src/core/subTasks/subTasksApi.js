import ApiService from "../../services/ApiService";

const subTasksApi = {
  get(params) {
    return ApiService.get("/sub_tasks", params);
  },

  getOne(id) {
    return ApiService.get(`/sub_tasks/${id}`);
  },

  create(subTask) {
    return ApiService.post("/sub_tasks", subTask);
  },

  update(id, subTask) {
    return ApiService.put(`/sub_tasks/${id}`, subTask);
  },

  destroy(id) {
    return ApiService.put(`/sub_tasks/${id}`);
  }
};

export default subTasksApi;
