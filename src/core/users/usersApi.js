import ApiService from "../../services/ApiService";

const usersApi = {
  get(params) {
    return ApiService.get("/users", params);
  },

  getCurrent() {
    return ApiService.get("/users/current");
  },

  create(user) {
    return ApiService.post("/users", user);
  }
};

export default usersApi;
