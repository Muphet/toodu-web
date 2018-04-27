import ApiService from "../../services/ApiService";

const commentsApi = {
  get(params) {
    return ApiService.get("/comments", params);
  },

  getOne(id) {
    return ApiService.get(`/comments/${id}`);
  },

  create(comment) {
    return ApiService.post("/comments", comment);
  },

  update(id, comment) {
    return ApiService.post(`/comments/${id}`, comment);
  },

  destroy(id) {
    return ApiService.post(`/comments/${id}`);
  }
};

export default commentsApi;
