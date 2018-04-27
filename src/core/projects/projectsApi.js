import ApiService from "../../services/ApiService";

const projectsApi = {
  get(params) {
    return ApiService.get("/projects", params);
  },

  create(project) {
    return ApiService.post("/projects", project);
  }
};

export default projectsApi;
