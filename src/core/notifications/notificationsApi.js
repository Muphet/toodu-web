import ApiService from "../../services/ApiService";

const notificationsApi = {
  get(params) {
    return ApiService.get("/notifications", params);
  },

  update(id, notification) {
    return ApiService.put(`/notifications/${id}`, notification);
  }
};

export default notificationsApi;
