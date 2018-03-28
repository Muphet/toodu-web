import ApiService from "./ApiService";

class ProjectService {
  getAll() {
    return ApiService.get("/projects");
  }
}

export default new ProjectService();
