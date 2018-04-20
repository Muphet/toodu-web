import ApiService from "../../services/ApiService";

const tasksApi = {
  get() {
    return ApiService.get("/teams/current");
  }
};

export default tasksApi;
