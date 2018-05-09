import ApiService from "../../services/ApiService";

const followsApi = {
  get(params) {
    return ApiService.get("/follows", params);
  },

  getOne(id) {
    return ApiService.get(`/follows/${id}`);
  },

  create(follow) {
    return ApiService.post("/follows", follow);
  },

  destroy(id) {
    return ApiService.delete(`/follows/${id}`);
  }
};

export default followsApi;
