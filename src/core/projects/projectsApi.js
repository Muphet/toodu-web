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
    return ApiService.post(`/projects/${id}`, project);
  },

  destroy(id) {
    return ApiService.post(`/projects/${id}`);
  }
};

export default projectsApi;
