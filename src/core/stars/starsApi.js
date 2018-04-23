import ApiService from "../../services/ApiService";

const starsApi = {
  getAll() {
    return ApiService.get("/stars");
  },

  create(projectId) {
    return ApiService.post("/stars", {
      project_id: projectId
    });
  },

  destroy(id) {
    return ApiService.delete(`/stars/${id}`);
  }
};

export default starsApi;
