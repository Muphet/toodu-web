import ApiService from "../../services/ApiService";

const projectsApi = {
  get(params) {
    return ApiService.get("/projects", params);
  },

  getOne(id) {
    return ApiService.get(`/projects/${id}`);
  },

  create(project) {
    return ApiService.post("/projects", project);
  },

  update(id, project) {
    return ApiService.put(`/projects/${id}`, project);
  },

  destroy(id) {
    return ApiService.delete(`/projects/${id}`);
  }
};

export default projectsApi;
