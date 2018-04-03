import ApiService from "./ApiService";

class ProjectService {
  getAll() {
    return ApiService.get("/projects");
  }

  create(project) {
    return ApiService.post("/projects", {
      name: project.name
    });
  }
}

export default new ProjectService();
