import ApiService from "../../services/ApiService";

const starsApi = {
  get(params) {
    return ApiService.get("/stars", params);
  },

  create(star) {
    return ApiService.post("/stars", star);
  },

  destroy(id) {
    return ApiService.delete(`/stars/${id}`);
  }
};

export default starsApi;
