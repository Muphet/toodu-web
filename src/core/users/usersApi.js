import ApiService from "../../services/ApiService";

const usersApi = {
  get(params) {
    return ApiService.get("/users", params);
  },

  getOne(id) {
    return ApiService.get(`/users/${id}`);
  },

  create(user) {
    return ApiService.post("/users", user);
  },

  update(id, user) {
    return ApiService.post(`/users/${id}`, user);
  },

  destroy(id) {
    return ApiService.post(`/users/${id}`);
  }
};

export default usersApi;
