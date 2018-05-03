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
    return ApiService.put(`/users/${id}`, user);
  },

  destroy(id) {
    if (id === "current") {
      return ApiService.delete("/auth");
    }
  }
};

export default usersApi;
