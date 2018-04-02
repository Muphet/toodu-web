import ApiService from "./ApiService";

class ProjectService {
  getAll() {
    return ApiService.get("/projects");
  }

  create(project) {
    ApiService.post("/projects", {
      name: project.name
    });
  }
}

export default new ProjectService();
