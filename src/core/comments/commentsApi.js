import ApiService from "../../services/ApiService";

const commentsApi = {
  get(params) {
    return ApiService.get("/comments", params);
  },

  create(comment) {
    return ApiService.post(`/comments`, comment);
  }
};

export default commentsApi;
