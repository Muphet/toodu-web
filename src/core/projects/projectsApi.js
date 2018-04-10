import ApiService from "../../services/ApiService";

const projectsApi = {
  getAll() {
    return ApiService.get("/projects");
  },

  create(project) {
    return ApiService.post("/projects", {
      name: project.name
    });
  }
}

export default projectsApi;
