import ApiService from "../../services/ApiService";

const invitesApi = {
  create(invite) {
    return ApiService.post("/invites", invite);
  }
};

export default invitesApi;
