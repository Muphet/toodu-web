import ApiService from "../../services/ApiService";

const usersApi = {
  getAll() {
    return ApiService.get("/users");
  },

  getCurrent() {
    return ApiService.get("/users/current");
  }
};

export default usersApi;
